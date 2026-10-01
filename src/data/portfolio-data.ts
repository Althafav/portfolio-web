export const navItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "work", label: "Work", href: "#work" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const heroWords = [
  "CRAFTING",
  "DIGITAL",
  "EXPERIENCES",
  "THAT",
  "ACTUALLY",
  "SHIP.",
];

export const techIcons = [
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Django", url: "https://cdn.simpleicons.org/django/092E20" },
  { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Docker", url: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Redis", url: "https://cdn.simpleicons.org/redis/FF4438" },
  {
    name: "AWS",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  { name: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
];

export const experience = [
  {
    period: "JAN 2024 — PRESENT",
    role: "Web Developer",
    company: "Strategic Exhibitions & Conferences · Dubai",
    bullets: [
      "Develop and maintain event & corporate websites using Next.js and TypeScript.",
      "Built a scalable exhibitors management portal serving 1,000+ users with individual exhibitor profiles.",
      "Integrated frontend applications with .NET APIs and third-party services.",
      "Improved PageSpeed scores by 30% through SEO and performance optimization.",
    ],
  },
  {
    period: "AUG 2023 — JAN 2024",
    role: "Full Stack Developer",
    company: "Willowy Solutions Pvt. Ltd.",
    bullets: [
      "Built billing and alert systems using Django, Celery, and Redis.",
      "Implemented API endpoints and workflow automation.",
      "Optimized database queries and enhanced workload capacity.",
      "Containerized and managed deployments using Docker and PostgreSQL.",
    ],
  },
  {
    period: "MAY 2023 — JUL 2023",
    role: "Jr. Python Developer",
    company: "AmruthaShala India Pvt. Ltd.",
    bullets: [
      "Developed Student Management ERP modules including hall ticket generation and employee profiles.",
      "Implemented complex PDF generation using PDFKit and wkhtmltopdf.",
    ],
  },
  {
    period: "FEB 2022 — APR 2023",
    role: "Internship Trainee",
    company: "Brototype",
    bullets: [
      "Contributed to web development projects using React and Django.",
      "Gained hands-on experience in full-stack development, database management, and deployment processes.",
    ],
  },
];

export const projects = [
  {
    slotId: "proj-evworld",
    image: "/images/proj-evworld.webp",
    placeholder: "EV World",
    kind: "Event Website",
    title: "EV World",
    description:
      "Official platform for EV World, built with RTA Dubai, showcasing sustainable mobility innovation for a multilingual global audience.",
    tags: ["#Next.js", "#Tailwind CSS", "#GSAP", "#Kontent CMS"],
    link: "https://www.evworld.ae/",
  },
  {
    slotId: "proj-strategic-media-manager",
    image: null,
    placeholder: "Strategic Media Manager",
    kind: "Web App",
    title: "Strategic Media Manager",
    description:
      "It's an internal Next.js app for the team to browse, search, share and download event photos that stay in OneDrive.",
    tags: ["#Next.js", "#Supabase", "#Tailwind CSS"],
    link: "https://media-manager.strategic.ae/",
  },
  {
    slotId: "proj-tycoons",
    image: "/images/proj-tycoons.webp",
    placeholder: "Tycoons",
    kind: "Event Website",
    title: "Tycoons",
    description:
      "Premium event platform for global business leaders and investors, with dynamic content and smooth animation.",
    tags: ["#Next.js", "#Tailwind CSS", "#GSAP", "#Headless CMS"],
    link: "https://www.thetycoons.com/",
  },
  {
    slotId: "proj-aim",
    image: "/images/proj-aim.webp",
    placeholder: "AIM Congress",
    kind: "Event Website",
    title: "AIM Congress",
    description:
      "Official site for the Annual Investment Meeting — high-performance pages with dynamic Kontent.ai content.",
    tags: ["#Next.js", "#Tailwind CSS", "#GSAP", "#Kontent CMS"],
    link: "https://aimcongress.com/",
  },
  {
    slotId: "proj-ips",
    image: "/images/proj-ips.webp",
    placeholder: "IPS Congress",
    kind: "Event Website",
    title: "IPS Congress",
    description:
      "The Middle East's largest property sales event — a scalable platform connecting global investors and exhibitors.",
    tags: ["#Next.js", "#Tailwind CSS", "#GSAP", "#Kontent CMS"],
    link: "https://www.ipscongress.com/",
  },
];
