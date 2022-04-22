import gsap, { Power3 } from "gsap";

export const addOverlay = node =>
  gsap.to(node, {
    duration: 0,
    css: {
      display: "block",
      zIndex: 12,
    },
  });

export const animateOverlay = node =>
  gsap.to(node, {
    opacity: 1,
    duration: 0.4,
    ease: Power3.easeInOut,
  });

export const animateOutOverlay = node =>
  gsap.to(node, {
    opacity: 0,
    duration: 0.3,
    ease: Power3.easeInOut,
  });

export const removeOverlay = node =>
  gsap.to(node, {
    duration: 0,
    delay: 0.4,
    css: {
      display: "none",
    },
  });
