import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  addMenuRoot,
  hideMenu,
  moveInfo,
  revealLinks,
  removeMenuRoot,
  revealMenu,
  skewMenu,
  handleBg,
  handleBgReturn,
} from "../../animations/menuAnimations";
import menuData from "../../data/menuData";
import Clamp from "../../components/Clamp";

import "./Hamburger.scss";
import "./MediaQueries.scss";

function Hamburger({ state }) {
  let menuRoot = useRef(null);
  let menuSecondaryBg = useRef(null);
  let menuLayer = useRef(null);
  let menuDynamicBg = useRef(null);
  let menuInfo = useRef(null);
  let lines = useRef([]);

  useEffect(() => {
    if (state.clicked === false) {
      // Close the menu

      hideMenu(menuLayer, menuSecondaryBg);
      removeMenuRoot(menuRoot);
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Open the menu

      addMenuRoot(menuRoot);
      revealMenu(menuSecondaryBg, menuLayer);
      skewMenu(menuSecondaryBg, menuLayer);
      moveInfo(menuInfo);
      revealLinks(lines.current[0], lines.current[1], lines.current[2]);
    }
  }, [state]);

  return (
    <div className="hamburger" ref={el => (menuRoot = el)}>
      <div className="secondary-bg" ref={el => (menuSecondaryBg = el)}></div>
      <div className="menu-layer" ref={el => (menuLayer = el)}>
        <div className="menu-dynamic-bg" ref={el => (menuDynamicBg = el)}></div>
        <div className="menu-content">
          <div className="row1">
            <nav>
              <ul>
                {menuData.links.map(({ name, path }, i) => (
                  <li key={`menu-link-${i}`}>
                    <Link ref={el => (lines.current[i] = el)} to={path}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="info" ref={el => (menuInfo = el)}>
              <h3>{menuData.info.title}</h3>
              <Clamp clamp={5}>{menuData.info.content}</Clamp>
            </div>
          </div>
          <div className="row2">
            <div className="series">
              <h6>Series:</h6>
              {menuData.previews.map(({ name, cover }, i) => (
                <span
                  key={`${i}-preview`}
                  onMouseEnter={() =>
                    handleBg(
                      cover,
                      menuDynamicBg,
                      menuInfo,
                      lines.current[0],
                      lines.current[1],
                      lines.current[2]
                    )
                  }
                  onMouseOut={() =>
                    handleBgReturn(
                      menuDynamicBg,
                      menuInfo,
                      lines.current[0],
                      lines.current[1],
                      lines.current[2]
                    )
                  }
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
