import gsap, { Power3 } from "gsap";

export const fadeOutSlide = node => {
  gsap.to(node, {
    duration: 0.4,
    opacity: 0,
    ease: Power3.easeInOut,
  });

  gsap.to(node, {
    duration: 0.4,
    skewY: -2,
    transformOrigin: "center center",
    ease: Power3.easeInOut,
  });
};

export const removeSlide = node =>
  gsap.to(node, {
    duration: 0,
    delay: 0.4,
    css: {
      display: "none",
    },
    ease: Power3.easeInOut,
  });

export const fadeInSlide = node => {
  gsap.to(node, {
    delay: 0.4,
    duration: 0.4,
    opacity: 1,
    ease: Power3.easeInOut,
  });

  gsap.from(node, {
    delay: 0.4,
    duration: 0.4,
    transformOrigin: "center center",
    skewY: 2,
    ease: Power3.easeInOut,
  });

  gsap.to(node, {
    delay: 0.4,
    duration: 0.4,
    skewY: 0,
    ease: Power3.easeInOut,
  });
};

export const addSlide = node =>
  gsap.to(node, {
    duration: 0,
    delay: 0.4,
    css: {
      display: "block",
    },
    ease: Power3.easeInOut,
  });

export const clipCover = node => {
  gsap.to(node, {
    width: "0%",
    height: "150%",
    duration: 0,
  });

  gsap.to(node, {
    width: "100%",
    height: "100%",
    duration: 0.8,
    delay: 0.4,
    ease: Power3.easeInOut,
  });
};

export const moveParagraphs = node =>
  gsap.from(node, {
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    ease: Power3.easeOut,
  });

export const moveHeader = node =>
  gsap.from(node, {
    x: "-70%",
    duration: 0.8,
    delay: 0.4,
    ease: Power3.easeOut,
  });
