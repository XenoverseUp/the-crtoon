import { GoPrimitiveDot } from "react-icons/go";
import { RiVipCrown2Fill } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { Flipped } from "react-flip-toolkit";
import { usePointer } from "../../../../../../contexts/CustomCursorProvider";
import Clamp from "../../../../../../components/Clamp";

import "./MainItem.scss";
import "./MediaQueries.scss";

const MainItem = ({ flipId, handleClick, data }) => {
  const pointer = usePointer();

  return (
    <div
      className="main-item"
      onClick={function (e) {
        e.target.classList[0] === "main-item" && handleClick(flipId);
      }}
    >
      <div className="main-item-wrapper">
        <div className="close" onClick={() => handleClick(flipId)}>
          <VscChromeClose />
        </div>
        <div className="cover">
          {data.most && (
            <Flipped flipId={`crown-flip-${flipId}`}>
              <RiVipCrown2Fill />
            </Flipped>
          )}
          <Flipped scale={false} flipId={`cover-flip-${flipId}`}>
            <img src={data.cover} alt="img" />
          </Flipped>
        </div>
        <div className="content">
          <div className="flip-header">
            <Flipped flipId={`name-flip-${flipId}`}>
              <h5>{data.name}</h5>
            </Flipped>
            <Flipped flipId={`info-flip-${flipId}`}>
              <div className="info">
                <span>{data.year}</span>
                <GoPrimitiveDot />
                <span>{data.genre}</span>
                <GoPrimitiveDot />
                <span>{data.rating} / 10</span>
              </div>
            </Flipped>
          </div>
          <Flipped
            scale={false}
            translate={false}
            flipId={`description-flip-${flipId}`}
          >
            <Clamp clamp={4}>{data.description}</Clamp>
          </Flipped>
          <Flipped flipId={`cta-flip-${flipId}`}>
            <button className="cta" {...pointer}>
              See more at library <BsBoxArrowUpRight />
            </button>
          </Flipped>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
