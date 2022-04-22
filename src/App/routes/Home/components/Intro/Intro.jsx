import Contributors from "./Contributors/Contributors";
import homeIntro from "../../../../data/homeIntro";
import "./Intro.scss";
import { BsArrowDown } from "react-icons/bs";
import useDidUpdateEffect from "../../../../hooks/useDidUpdateEffect";
import "./MediaQueries.scss";
import { useState } from "react";

const Intro = () => {
  const [buttonRipples, setButtonRipples] = useState([]);

  const addRipple = e => {
    setButtonRipples([
      ...buttonRipples,
      {
        x: e.clientX - e.target.offsetLeft,
        y: e.clientY - e.target.offsetTop,
      },
    ]);
  };

  return (
    <section className="intro">
      <article>
        <span className="trial">Try 15 days for free!</span>
        <h2>{homeIntro.title}</h2>
        <p>{homeIntro.content}</p>

        <div className="contributors">
          <h4>Contributed by</h4>
          <Contributors />
        </div>
        <div className="controllers">
          <button onClick={addRipple}>
            Start Free Trial
            {buttonRipples.map(({ x, y }, i) => {
              const animationDuration = 750;

              setTimeout(() => {
                try {
                  document.getElementById(`ripple-${i}`).remove();
                } catch (err) {
                  return null;
                }
              }, animationDuration);

              return (
                <span
                  id={`ripple-${i}`}
                  key={`ripple-${i}`}
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                    animationDuration: animationDuration + "ms",
                  }}
                />
              );
            })}
          </button>
          <button
            onClick={() =>
              document.querySelector(".first-body").scrollIntoView()
            }
          >
            Discover Website
            <BsArrowDown />
          </button>
        </div>
      </article>
      <div
        className="img"
        style={{
          background: `url(${homeIntro.img.src}) no-repeat center / cover`,
        }}
      ></div>
    </section>
  );
};

export default Intro;
