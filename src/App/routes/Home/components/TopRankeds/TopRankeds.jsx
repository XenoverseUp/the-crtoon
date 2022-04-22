import { useEffect, useRef, useState } from "react";
import { Flipper } from "react-flip-toolkit";
import FlipItem from "./FlipItem/FlipItem";
import topRankedsData, { rankeds } from "../../../../data/topRankeds";
import {
  addOverlay,
  animateOutOverlay,
  animateOverlay,
  removeOverlay,
} from "../../../../animations/topRankedAnimations";

import "./TopRankeds.scss";
import "./MediaQueries.scss";

const TopRankeds = () => {
  const [state, setState] = useState({
    clicked: false,
    activeFlip: 0,
  });

  let overlay = useRef(null);

  const handleClick = flipId => {
    if (state.clicked)
      setState({
        ...state,
        clicked: false,
      });
    else
      setState({
        clicked: true,
        activeFlip: flipId,
      });
  };

  useEffect(() => {
    if (state.clicked) {
      addOverlay(overlay);
      animateOverlay(overlay);
    } else {
      overlay.style.zIndex = 1;
      animateOutOverlay(overlay);
      removeOverlay(overlay);
    }
  }, [state.clicked]);

  return (
    <section className="top-rankeds">
      <div className="wrapper">
        <div className="ranked-header">
          <h3>{topRankedsData.title}</h3>
          <p>{topRankedsData.content}</p>
        </div>
        <div className="overlay" ref={el => (overlay = el)}></div>
        <Flipper flipKey={state} decisionData={state} className="container">
          {rankeds.map((data, i) => (
            <FlipItem
              key={`flip-item-key-${i}`}
              {...{ state, handleClick, data }}
              flipId={i}
            />
          ))}
        </Flipper>
      </div>
    </section>
  );
};

export default TopRankeds;
