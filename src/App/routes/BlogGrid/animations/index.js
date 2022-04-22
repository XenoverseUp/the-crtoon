import gsap, { Power3 } from "gsap";

export const revealSearchBar = refs => {
  const tl = gsap.timeline();
  tl.to(refs.current.wrapper, {
    width: "min(350px, 100%)",
    duration: 0.4,
    ease: Power3.easeInOut,
  }).call(() => refs.current.input.focus(), [], "+=0.04");
};
export const hideSearchBar = refs => {
  gsap.to(refs.current.wrapper, {
    width: "min(3rem, 100%)",
    duration: 0.4,
    ease: Power3.easeInOut,
  });
};
