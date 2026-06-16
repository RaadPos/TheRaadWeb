"use client";

import { useEffect } from "react";

/**
 * Presentational page behaviors ported from the prototype's vanilla JS:
 * twinkling hero stars, reveal-on-scroll, animated stat counters,
 * the nav's scrolled state, and active-link tracking.
 */
export default function Effects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // --- Scatter twinkling stars in the hero background ---
    const starWrap = document.getElementById("stars");
    if (starWrap && starWrap.childElementCount === 0) {
      const N = 34;
      for (let i = 0; i < N; i++) {
        const s = document.createElement("i");
        s.className =
          "absolute w-[2px] h-[2px] rounded-full bg-tint/55 motion-safe:animate-twinkle";
        s.style.left = (Math.random() * 100).toFixed(2) + "%";
        s.style.top = (Math.random() * 70).toFixed(2) + "%";
        s.style.animationDelay = (Math.random() * 4.4).toFixed(2) + "s";
        s.style.animationDuration = (3.2 + Math.random() * 3.4).toFixed(2) + "s";
        const sc = 0.6 + Math.random() * 0.9;
        s.style.transform = "scale(" + sc.toFixed(2) + ")";
        starWrap.appendChild(s);
      }
    }

    // --- Nav scrolled state ---
    const navEl = document.getElementById("nav");
    const onScrollNav = () => {
      if (navEl) navEl.classList.toggle("scrolled", window.scrollY > 20);
    };
    onScrollNav();
    window.addEventListener("scroll", onScrollNav, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScrollNav));

    // --- Reveal on scroll ---
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document
      .querySelectorAll(".reveal, .reveal-stagger, .how-phone")
      .forEach((el) => revealIO.observe(el));
    cleanups.push(() => revealIO.disconnect());

    // --- Stat counters ---
    const counterIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          const duration = 1600;
          const start = performance.now();
          const isInt = Number.isInteger(target);
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = target * eased;
            el.textContent =
              (isInt ? Math.floor(val).toLocaleString() : val.toFixed(1)) +
              suffix;
            if (t < 1) requestAnimationFrame(tick);
            else
              el.textContent =
                (isInt
                  ? Math.floor(target).toLocaleString()
                  : target.toFixed(1)) + suffix;
          };
          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document
      .querySelectorAll<HTMLElement>("[data-count]")
      .forEach((el) => counterIO.observe(el));
    cleanups.push(() => counterIO.disconnect());

    // --- Subtle parallax / tilt on the hero phone ---
    const phoneWrap = document.getElementById("phoneWrap");
    const canTilt =
      phoneWrap &&
      window.matchMedia("(min-width: 960px)").matches &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    const onMove = (e: MouseEvent) => {
      if (!phoneWrap) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      phoneWrap.style.transform =
        "translate(" +
        (x * 12).toFixed(1) +
        "px, " +
        (y * 12).toFixed(1) +
        "px) rotateY(" +
        (x * 4).toFixed(2) +
        "deg) rotateX(" +
        (-y * 3).toFixed(2) +
        "deg)";
    };
    if (canTilt) {
      document.addEventListener("mousemove", onMove);
      cleanups.push(() => document.removeEventListener("mousemove", onMove));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
