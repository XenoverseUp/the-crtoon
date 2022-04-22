import { useEffect, useRef } from "react";
import homeStripe from "../../../../data/homeStripe";
import gsap from "gsap";
import "./Stripe.scss";

const Stripe = () => {
  let slider = useRef(null);

  useEffect(() => {
    gsap.to(slider, {
      x: "-15%",
      scrollTrigger: {
        trigger: slider,
        start: "bottom bottom",
        end: "+=800",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="stripe">
      <div className="sliding-content" ref={el => (slider = el)}>
        {homeStripe.map((src, i) => (
          <span key={`home-stripe-${i}`} className="img-container">
            <img {...{ src }} alt={`home-stripe-img-${i}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Stripe;
