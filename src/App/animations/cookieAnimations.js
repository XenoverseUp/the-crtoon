import gsap, { Power3 } from "gsap";

export const addCard = node =>
  gsap.to(node, {
    duration: 0,
    css: {
      display: "flex",
    },
  });

export const animateCard = (node, direction = "in") =>
  gsap.from(node, {
    duration: 0.6,
    opacity: 0,
    x: -100,
    skewY: 15,
    ease: Power3.easeOut,
  });

export const moveHeader = node =>
  gsap.from(node, {
    duration: 0.4,
    y: 30,
    skewY: 6,
    delay: 0.5,
    ease: Power3.easeOut,
  });

export const animateOutCard = node =>
  gsap.to(node, {
    duration: 0.6,
    opacity: 0,
    x: -200,
    ease: Power3.easeOut,
  });

export const removeCard = node =>
  gsap.to(node, {
    duration: 0,
    delay: 0.6,
    css: {
      display: "none",
    },
  });
