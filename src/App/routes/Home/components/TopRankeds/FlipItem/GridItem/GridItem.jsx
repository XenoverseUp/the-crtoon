import { GoPrimitiveDot } from "react-icons/go";
import { Flipped } from "react-flip-toolkit";
import Tilt from "react-tilt";
import { RiVipCrown2Fill } from "react-icons/ri";
import { usePointer } from "../../../../../../contexts/CustomCursorProvider";

import "./GridItem.scss";
import "./MediaQueries.scss";

const GridItem = ({ flipId, handleClick, data }) => {
  const pointer = usePointer();

  return (
    <div
      className={`grid-item ${data.most ? "most" : ""}`}
      onClick={() => handleClick(flipId)}
      {...pointer}
    >
      <Tilt
        options={{
          max: 5,
          scale: 1.01,
          speed: 2000,
        }}
      >
        {data.most && (
          <Flipped flipId={`crown-flip-${flipId}`}>
            <RiVipCrown2Fill />
          </Flipped>
        )}
        <Flipped scale={false} flipId={`cover-flip-${flipId}`}>
          <img src={data.cover} alt="img" />
        </Flipped>

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
        <Flipped
          scale={false}
          translate={false}
          flipId={`description-flip-${flipId}`}
        >
          <p className="desc"></p>
        </Flipped>
        <Flipped flipId={`cta-flip-${flipId}`}>
          <button className="cta"></button>
        </Flipped>
      </Tilt>
    </div>
  );
};

export default GridItem;
