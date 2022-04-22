import { useRef, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { switchMenuButton } from "../../animations/menuAnimations";
import { Hamburger } from "..";
import "./Header.scss";
import { usePointer } from "../../contexts/CustomCursorProvider";

function Header({ history }) {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menu: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  const pointer = usePointer();

  let open = useRef(null);
  let close = useRef(null);

  useEffect(() => {
    history.listen(() => setState({ clicked: false, menuName: "Menu" }));
  });

  useEffect(() => {
    if (state.clicked === false) {
      switchMenuButton(close, open);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      switchMenuButton(open, close);
    }
  }, [state]);

  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 800);
  };

  const handleMenu = () => {
    disableMenu();

    if (state.initial === false)
      setState({
        initial: null,
        clicked: true,
        menu: "Close",
      });
    else if (state.clicked === true)
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    else if (state.clicked === false)
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
  };

  return (
    <>
      <div className="header-placeholder"></div>
      <header>
        <div className="blurry-bg"></div>
        <div className="inner-header">
          <div className="logo">
            <Link to="/">THE CRTOON</Link>
          </div>
          <div className="menu-button">
            <button {...pointer} onClick={handleMenu} {...{ disabled }}>
              <span ref={el => (open = el)}>menu</span>
              <span ref={el => (close = el)}>close</span>
            </button>
          </div>
        </div>
        <Hamburger {...{ state }} />
      </header>
    </>
  );
}

export default withRouter(Header);
