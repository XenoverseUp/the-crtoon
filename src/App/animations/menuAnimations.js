import gsap, { Power3 } from "gsap";

export const hideMenu = (node1, node2) =>
  gsap.to([node1, node2], {
    duration: 0.7,
    height: 0,
    ease: Power3.easeInOut,
    stagger: {
      amount: 0.07,
    },
  });

export const removeMenuRoot = node =>
  gsap.to(node, {
    duration: 0.8,
    css: {
      display: "none",
    },
  });

export const revealMenu = (node1, node2) =>
  gsap.to([node1, node2], {
    duration: 0,
    opacity: 1,
    height: "100%",
  });

export const skewMenu = (node1, node2) =>
  gsap.from([node1, node2], {
    duration: 0.7,
    height: 0,
    transformOrigin: "right top",
    skewY: 3,
    ease: Power3.easeInOut,
    stagger: {
      amount: 0.1,
    },
  });

export const addMenuRoot = node =>
  gsap.to(node, {
    duration: 0,
    css: {
      display: "block",
    },
  });

export const moveInfo = node =>
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: Power3.easeInOut,
  });

export const revealLinks = (node1, node2, node3) =>
  gsap.from([node1, node2, node3], {
    duration: 0.7,
    opacity: 0,
    delay: 0.2,
    ease: Power3.easeInOut,
    stagger: {
      amount: 0.3,
    },
  });

export const handleBg = (bgPath, node, ...rest) => {
  gsap.to(node, {
    duration: 0,
    background: `url(${bgPath}) center center`,
  });

  gsap.to(node, {
    duration: 0.4,
    opacity: 1,
    ease: Power3.easeInOut,
  });

  gsap.from(node, {
    duration: 0.4,
    skewY: 1,
    transformOrigin: "right top",
  });

  gsap.to([...rest], {
    duration: 0.4,
    opacity: 0.5,
    ease: Power3.easeInOut,
  });
};

export const handleBgReturn = (node, ...rest) => {
  gsap.to(node, {
    duration: 0.4,
    opacity: 0,
  });

  gsap.to([...rest], {
    duration: 0.4,
    opacity: 1,
    ease: Power3.easeInOut,
  });
};

export const switchMenuButton = (node1, node2) => {
  gsap.to(node1, {
    duration: 0.4,
    opacity: 0,
    ease: "power3.inOut",
  });

  gsap.to(node1, {
    duration: 0,
    delay: 0.4,
    css: {
      display: "none",
    },
  });

  gsap.to(node2, {
    duration: 0,
    delay: 0.4,
    css: {
      display: "block",
    },
  });

  gsap.to(node2, {
    delay: 0.4,
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
};
