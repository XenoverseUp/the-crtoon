import gsap, { Power3 } from "gsap";

export const toggleSlide = (slides, current, previous) => {
  const tl = gsap.timeline();

  tl.to(slides[previous], {
    duration: 0.2,
    opacity: 0,
  })
    .to(slides[previous], {
      duration: 0,
      css: {
        display: "none",
      },
    })
    .to(slides[current], {
      duration: 0,
      css: {
        display: "flex",
      },
    })
    .fromTo(
      slides[current],
      {
        opacity: 0,
        y: 20,
        skewX: 3,
      },
      {
        opacity: 1,
        y: 0,
        skewX: 0,
        duration: 0.75,
        ease: Power3.easeInOut,
      },
      "-=.25"
    );
};
