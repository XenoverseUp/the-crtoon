import { Flipped } from "react-flip-toolkit";
import "./FlipItem.scss";
import GridItem from "./GridItem/GridItem";
import MainItem from "./MainItem/MainItem";

const FlipItem = ({ flipId, state, handleClick, data }) => {
  return (
    <Flipped {...{ flipId }}>
      {state.clicked && state.activeFlip === flipId ? (
        <MainItem {...{ flipId, handleClick, data }} />
      ) : (
        <GridItem {...{ flipId, handleClick, data }} />
      )}
    </Flipped>
  );
};

export default FlipItem;
