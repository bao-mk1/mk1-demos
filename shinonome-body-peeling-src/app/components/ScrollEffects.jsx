"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const progress = document.querySelector(".scroll-progress");
    const revealTargets = document.querySelectorAll(
      [
        ".landing > section:not(.hero)",
        ".pain-item",
        ".method-card article",
        ".flow-grid article",
        ".plan-grid article",
        ".event-timeline article",
        ".faq-list article",
        ".voice-grid blockquote",
        ".testimonial-slider blockquote",
        ".brand-gallery-card",
        ".occasion-cloud span",
      ].join(",")
    );

    const updateProgress = () => {
      if (!progress) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
    };

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    revealTargets.forEach((target) => observer.observe(target));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      root.classList.remove("reveal-ready");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
