import { GoPrimitiveDot } from "react-icons/go";
import { Clamp } from "../../../../components";
import "./Highlight.scss";

const Highlight = ({ cover, author, date, link, title }) => {
  return (
    <div className="highlight">
      <img src={cover} alt={title} />
      <div className="highlight-content">
        <Clamp element="h5" clamp={2}>
          {title}
        </Clamp>
        <div className="info">
          <span>{author}</span>
          <GoPrimitiveDot />
          <span>
            {date.toLocaleString("en-us", { month: "long", year: "numeric" })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
