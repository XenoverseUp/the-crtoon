import gsap, { Power3 } from "gsap";

export const animateMovement = (
  cursor,
  outer,
  { innerDelay, outerDelay },
  event
) => {
  gsap.to(cursor, {
    duration: innerDelay,
    x: event.clientX,
    y: event.clientY,
  });

  gsap.to(outer, {
    duration: outerDelay,
    x: event.clientX,
    y: event.clientY,
  });
};

export const animateClick = (cursor, outer) => {
  gsap.to(outer, {
    duration: 0.2,
    ease: Power3.easeInOut,
    scale: 0.8,
    opacity: 0.5,
  });
  gsap.to(cursor, {
    duration: 0.2,
    ease: Power3.easeInOut,
    scale: 1.3,
  });
};

export const normalizeCursor = (cursor, outer) => {
  gsap.to(outer, {
    duration: 0.4,
    ease: Power3.easeInOut,
    scale: 1,
    opacity: 1,
  });
  gsap.to(cursor, {
    duration: 0.4,
    ease: Power3.easeInOut,
    scale: 1,
  });
};

export const closePointer = pointer =>
  gsap.to(pointer, {
    duration: 0.4,
    scale: 0,
    ease: Power3.easeInOut,
  });

export const openPointer = pointer =>
  gsap.to(pointer, {
    duration: 0.4,
    scale: 1,
    ease: Power3.easeInOut,
  });

export const configureCursors = (cursor, outer) => {
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });
  gsap.set(outer, { xPercent: -50, yPercent: -50 });
};
