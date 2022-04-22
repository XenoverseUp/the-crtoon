import gsap, { Power3 } from "gsap";

export const openAccordion = ({ contentContainerRef, textRef }) => {
  gsap.to(contentContainerRef, {
    duration: 0.4,
    ease: Power3.easeInOut,
    height: "auto",
  });

  gsap.to(textRef, {
    delay: 0.1,
    duration: 0.4,
    ease: Power3.easeInOut,
    opacity: 0.9,
  });

  gsap.from(textRef, {
    delay: 0.1,
    duration: 0.4,
    y: 20,
    ease: Power3.easeInOut,
  });
};

export const closeAccordion = ({ contentContainerRef, textRef }) => {
  gsap.to(contentContainerRef, {
    duration: 0.4,
    ease: Power3.easeInOut,
    height: 0,
  });

  gsap.to(textRef, {
    duration: 0.4,
    ease: Power3.easeInOut,
    opacity: 0,
  });
};
