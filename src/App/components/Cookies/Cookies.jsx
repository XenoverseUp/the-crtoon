import { useEffect, useRef } from "react";
import {
  addCard,
  animateCard,
  animateOutCard,
  moveHeader,
  removeCard,
} from "../../animations/cookieAnimations";
import src from "../../assets/img/cookie.png";
import { usePointer } from "../../contexts/CustomCursorProvider";
import "./Cookies.scss";

const Cookies = ({ privacyPolicyLink }) => {
  const pointer = usePointer();

  let cookie = useRef(null);
  let header = useRef(null);

  const animateIn = () => {
    addCard(cookie);
    animateCard(cookie);
    moveHeader(header);
  };
  const animateOut = () => {
    animateOutCard(cookie);
    removeCard(cookie);
  };

  useEffect(() => {
    const timeout = setTimeout(animateIn, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <aside className="cookies" ref={el => (cookie = el)}>
      <div className="illustration">
        <img {...{ src }} alt="cookie" />
      </div>
      <div className="head">
        <h6 ref={el => (header = el)}>We use cookies</h6>
      </div>
      <p>This website uses cookies to enhance your browsing experience.</p>
      <div className="controllers">
        <button onClick={animateOut} {...pointer}>
          Accept
        </button>
        <button {...pointer}>Privacy Policy</button>
      </div>
    </aside>
  );
};

export default Cookies;
