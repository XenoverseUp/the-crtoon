import { Children, cloneElement, useEffect, useRef, useState } from "react";
import useDidUpdateEffect from "../../hooks/useDidUpdateEffect";
import usePrevious from "../../hooks/usePrevious";
import { toggleSlide } from "../../animations/sliderAnimations";
import "./Slider.scss";

const Slider = ({ children, out = 12000 }) => {
  const [current, setCurrent] = useState(0);
  const previous = usePrevious(current);
  const slideRefs = useRef([]);
  const elements = Children.toArray(children);
  const { length } = elements;
  let updatedElements = elements.map((element, i) =>
    cloneElement(element, {
      slideRef: el => (slideRefs.current[i] = el),
      ...(i === 0 && { first: true }),
    })
  );

  useDidUpdateEffect(() => {
    toggleSlide(slideRefs.current, current, previous);
  }, [current]);

  const next = slide => (slide === length - 1 ? 0 : slide + 1);

  useEffect(() => {
    let timeout = setTimeout(() => setCurrent(next(current)), out);

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div className="slider">
      <div className="slides">{updatedElements}</div>

      <div className="dots">
        {[...Array(length)].map((_, i) => (
          <div
            key={`login-slide-dot-${i}`}
            onClick={() => setCurrent(i)}
            className={`dot ${i === current ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
