"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import CustomCursor from "./custom-cursor";
import { experience, heroWords, navItems, projects, techIcons } from "@/data/portfolio-data";

const SECTION_IDS = ["hero", "about", "experience", "work", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

const RESUME_PATH = "/Althaf-Mohamed-Umer-Resume-2026.pdf";

function Arrow({ dir }: { dir: "down" | "right" }) {
  return (
    <svg
      className="arrow"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      style={dir === "right" ? { transform: "rotate(-90deg)" } : undefined}
    >
      <path
        d="M8 2v11M3.5 8.5 8 13l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [curtainDone, setCurtainDone] = useState(false);
  const [active, setActive] = useState<SectionId>("hero");
  const [revealed, setRevealed] = useState<Partial<Record<SectionId, boolean>>>({});

  const pageRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Partial<Record<SectionId, HTMLElement | null>>>({});

  useEffect(() => {
    pageRef.current?.classList.add("js-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) {
            setRevealed((r) => (r[id] ? r : { ...r, [id]: true }));
            if (entry.intersectionRatio > 0.4) setActive(id);
          }
        });
      },
      { threshold: [0.15, 0.4] }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: SectionId) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const revealClass = (id: SectionId) => `reveal${revealed[id] ? " in-view" : ""}`;

  return (
    <div ref={pageRef} className="page">
      <CustomCursor />

      {!curtainDone && (
        <div className="curtain" aria-hidden="true" onAnimationEnd={() => setCurtainDone(true)}>
          <span>ALTHAF.DEV</span>
        </div>
      )}

      <nav className="nav" aria-label="Primary">
        <a href="#hero" className="nav-logo">
          ALTHAF<span>.DEV</span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link${active === item.id ? " active" : ""}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href={RESUME_PATH} download="Althaf-Mohamed-Umer-Resume-2026.pdf" className="nav-resume">
          Resume <Arrow dir="down" />
        </a>
      </nav>

      <section id="hero" ref={setSectionRef("hero")} className="hero">
        <div className="hero-blob" aria-hidden="true" />
        <div className="hero-inner">
          <h1 className="hero-title">
            {heroWords.map((word, i) => (
              <span
                key={word}
                className={`hero-word${word === "SHIP." ? " accent" : ""}`}
                style={{ animationDelay: `${0.9 + i * 0.09}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-lede">
            Full-stack developer building fast, scalable, slightly-too-polished web apps with
            React, Next.js, Node.js and Django — from pixel to production.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              See the Work <Arrow dir="down" />
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </section>

      <section id="about" ref={setSectionRef("about")} className={`about ${revealClass("about")}`}>
        <div className="about-photo-wrap">
          <Image
            src="/images/profile-photo.webp"
            alt="Althaf Mohamed Umer"
            width={340}
            height={340}
            className="about-photo"
          />
        </div>
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="body">
            Hi, I&apos;m <strong>Althaf</strong> — a full-stack developer who treats a slow API
            like a personal insult. I build with React, Next.js, Node.js and Django, gluing
            pretty interfaces to backends that actually hold up under pressure.
          </p>
          <p className="body">
            If it ships fast, scales politely, and doesn&apos;t fall over when someone shares the
            link 40,000 times — that&apos;s the job done. 3+ years turning briefs into real,
            working, occasionally-delightful software.
          </p>

          <p className="stack-label" id="stack-label">
            Tech Stack
          </p>
          <div className="marquee-mask" role="group" aria-labelledby="stack-label">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <ul className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {techIcons.map((icon) => (
                    <li className="marquee-item" key={icon.name}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={icon.url} alt="" width={22} height={22} loading="lazy" />
                      <span>{icon.name}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        ref={setSectionRef("experience")}
        className={`experience ${revealClass("experience")}`}
      >
        <h2 className="section-title section-title--spaced">
          Where I&apos;ve Been Causing (Good) Trouble
        </h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-item" key={job.role}>
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-period">{job.period}</p>
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-company">{job.company}</p>
              <ul className="timeline-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="work" ref={setSectionRef("work")} className={`work ${revealClass("work")}`}>
        <h2 className="section-title section-title--spaced">Stuff I&apos;ve Shipped</h2>
        <div className="work-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.slotId}>
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} website screenshot`}
                  width={640}
                  height={400}
                  className="project-image"
                />
              ) : (
                <div className="project-image-placeholder" aria-hidden="true">
                  {p.placeholder}
                </div>
              )}
              <div className="project-body">
                <p className="project-kind">{p.kind}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <ul className="project-tags" aria-label="Built with">
                  {p.tags.map((tag) => (
                    <li className="project-tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`Visit the ${p.title} website (opens in a new tab)`}
                >
                  Visit Website <Arrow dir="right" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="resume-cta-wrap" aria-labelledby="resume-cta-title">
        <div className="resume-cta">
          <div>
            <h2 id="resume-cta-title">Want the paper version?</h2>
            <p>Same skills, fewer animations. Grab the PDF.</p>
          </div>
          <a href={RESUME_PATH} download="Althaf-Mohamed-Umer-Resume-2026.pdf" className="btn-lime">
            Download Resume <Arrow dir="down" />
          </a>
        </div>
      </aside>

      <section
        id="contact"
        ref={setSectionRef("contact")}
        className={`contact ${revealClass("contact")}`}
      >
        <h2 className="section-title">Let&apos;s Make Something People Can&apos;t Ignore</h2>
        <p className="contact-lede">
          Got a project, a wild idea, or just want to talk tech? My inbox is always open — no
          forms, no gatekeeping.
        </p>
        <a href="mailto:althafdev01@gmail.com" className="contact-email">
          althafdev01@gmail.com
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Althaf Mohamed Umer — built with React, caffeine, and mild chaos.</p>
      </footer>
    </div>
  );
}
