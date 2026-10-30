/**
 * Pinned "convergence" narrative on the home page: the four technologies one
 * after another, resolving into one solution. GSAP ScrollTrigger drives it;
 * Lenis smooths the page scroll and is synced to the GSAP ticker.
 *
 * Loaded only on large screens with motion allowed (see Convergence.astro).
 * The section's static layout is the fallback, and gsap.matchMedia restores
 * it, reverting every inline style, when the query stops matching.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/** Where each chip starts before converging, in px from its resting place. */
const CHIP_ORIGINS = [
  { x: -150, y: -90 },
  { x: 150, y: -90 },
  { x: 150, y: 90 },
  { x: -150, y: 90 },
];

export function mountConvergence(section: HTMLElement, liveQuery: string): void {
  const lenis = new Lenis({ anchors: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const media = gsap.matchMedia();
  media.add(liveQuery, () => {
    const head = section.querySelector<HTMLElement>("[data-conv-head]");
    const combined = section.querySelector<HTMLElement>("[data-combined]");
    const core = section.querySelector<HTMLElement>("[data-core]");
    const progress = section.querySelector<HTMLElement>("[data-progress]");
    const steps = gsap.utils.toArray<HTMLElement>("[data-step]", section);
    const chips = gsap.utils.toArray<HTMLElement>("[data-chip]", section);
    const wires = gsap.utils.toArray<SVGLineElement>("[data-wire]", section);
    if (!head || !combined || !core || !progress || steps.length === 0) return;

    section.classList.add("is-live");

    // One-shot reveal of the heading; inline styles are cleared afterwards
    gsap.from(head.children, {
      y: 24,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      clearProps: "transform,opacity,visibility",
      scrollTrigger: { trigger: section, start: "top 80%", once: true },
    });

    // Each step's text and image animate separately: images cross-dissolve,
    // texts hand over one after the other so they never overlap.
    const texts = steps.map((step) => step.querySelector<HTMLElement>(".conv__text"));
    const medias = steps.map((step) => step.querySelector<HTMLElement>(".conv__media"));
    gsap.set([...texts.slice(1), ...medias.slice(1)], { autoAlpha: 0 });
    gsap.set(combined, { autoAlpha: 0 });

    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
      scrollTrigger: {
        trigger: section,
        // Pin just below the sticky site header
        start: () =>
          `top ${document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0}px`,
        end: () => `+=${Math.round(window.innerHeight * 4.5)}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    steps.forEach((step, index) => {
      if (index > 0) {
        timeline
          .to(texts[index - 1], { autoAlpha: 0, y: -28, duration: 0.45 })
          .to(medias[index - 1], { autoAlpha: 0 }, "<")
          .fromTo(medias[index], { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(
            step.querySelector("img"),
            { scale: 1.08 },
            { scale: 1, duration: 1.6, ease: "none" },
            "<",
          )
          .fromTo(texts[index], { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.45 }, "<0.5");
      }
      timeline.to({}, { duration: 0.8 }); // hold, so each step can be read
    });

    // The four become one
    timeline
      .to(texts[texts.length - 1], { autoAlpha: 0, y: -28, duration: 0.45 })
      .to(medias[medias.length - 1], { autoAlpha: 0 }, "<")
      .to(combined, { autoAlpha: 1, duration: 0.6 }, "<0.5")
      .fromTo(
        chips,
        {
          autoAlpha: 0,
          x: (index: number) => CHIP_ORIGINS[index % CHIP_ORIGINS.length].x,
          y: (index: number) => CHIP_ORIGINS[index % CHIP_ORIGINS.length].y,
        },
        { autoAlpha: 1, x: 0, y: 0, stagger: 0.1 },
        "<",
      )
      .fromTo(wires, { strokeDashoffset: 1 }, { strokeDashoffset: 0, stagger: 0.1 }, "<0.4")
      .fromTo(core, { autoAlpha: 0, scale: 0.3 }, { autoAlpha: 1, scale: 1 }, "<0.3")
      .to({}, { duration: 1 }); // hold on the result

    timeline.fromTo(
      progress,
      { scaleX: 0 },
      { scaleX: 1, ease: "none", duration: timeline.duration() },
      0,
    );

    return () => section.classList.remove("is-live");
  });

  // Web fonts can shift positions after load: recalculate once they settle
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}
