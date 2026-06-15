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
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
      const heroShift = Math.min(28, window.scrollY * 0.04);
      root.style.setProperty("--hero-scroll-shift", `${heroShift}px`);
      if (progress) {
        progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
      }
    };

    root.classList.add("reveal-ready");

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();
      return () => {
        window.removeEventListener("scroll", updateProgress);
        root.style.removeProperty("--hero-scroll-shift");
        root.classList.remove("reveal-ready");
      };
    }

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
    const showVisibleTargets = () => {
      revealTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          target.classList.add("is-visible");
        }
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("pageshow", showVisibleTargets);
    updateProgress();
    requestAnimationFrame(showVisibleTargets);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("pageshow", showVisibleTargets);
      root.style.removeProperty("--hero-scroll-shift");
      root.classList.remove("reveal-ready");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
