"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE = "a, button, [role='button']";

// Ring that trails the native pointer and grows over links.
// Position is written straight to the DOM so the page never re-renders on mousemove.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const posRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const sync = () => setEnabled(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    let x = -100;
    let y = -100;

    const onMove = (ev: PointerEvent) => {
      x = ev.clientX;
      y = ev.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (posRef.current) posRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    const onOver = (ev: PointerEvent) => {
      const overLink = (ev.target as Element | null)?.closest?.(INTERACTIVE);
      ringRef.current?.classList.toggle("is-link", Boolean(overLink));
    };

    const onLeave = () => ringRef.current?.classList.add("is-hidden");
    const onEnter = () => ringRef.current?.classList.remove("is-hidden");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={posRef} className="cursor-pos" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
