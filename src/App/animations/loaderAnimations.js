import gsap, { Power3 } from "gsap";

const tl = gsap.timeline();

export const removeLoader = () =>
  tl
    .to(".progress", {
      width: "100%",
      duration: 0.1,
      ease: Power3.easeInOut,
    })
    .to(".progress", {
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
    })
    .to(
      "#loading-text",
      {
        duration: 0.4,
        opacity: 0,
        ease: Power3.easeInOut,
      },
      "-=.4"
    )
    .to(["#primary-bg", "#secondary-bg"], {
      duration: 0.75,
      delay: 1,
      width: 0,
      ease: Power3.easeInOut,
      stagger: {
        amount: 0.075,
      },
    })
    .to(
      ["#primary-bg", "#secondary-bg"],
      {
        transformOrigin: "bottom left",
        duration: 1,
        skewX: 3,
        ease: Power3.easeInOut,
        stagger: {
          amount: 0.1,
        },
      },
      "-=1"
    )
    .call(() => (document.body.style.overflowY = "auto"))
    .to("#loader", {
      css: {
        display: "none",
      },
      duration: 0,
    })
    .call(() => document.getElementById("loader").remove());
