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

    let lastScroll = 0;
    const updateProgress = () => {
      const y = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? y / scrollable : 0;
      const heroShift = Math.min(28, y * 0.04);
      root.style.setProperty("--hero-scroll-shift", `${heroShift}px`);
      if (progress) {
        progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
      }
      // Hide-on-scroll-down / show-on-scroll-up glass header.
      const bar = document.querySelector(".topbar");
      if (bar) {
        if (y > lastScroll && y > 140) bar.classList.add("is-hidden");
        else bar.classList.remove("is-hidden");
      }
      lastScroll = y;
    };

    root.classList.add("reveal-ready");

    const reveal = (el) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach(reveal);
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
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    revealTargets.forEach((target) => observer.observe(target));

    // Fail-safe: anything already in view on load / bfcache restore is shown.
    const showVisibleTargets = () => {
      revealTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) reveal(target);
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
