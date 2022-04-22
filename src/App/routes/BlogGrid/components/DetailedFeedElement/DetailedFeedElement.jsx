import { Link } from "react-router-dom";
import { Clamp } from "../../../../components";
import { usePointer } from "../../../../contexts/CustomCursorProvider";
import "./DetailedFeedElement.scss";

const DetailedFeedElement = ({ data }) => {
  const pointer = usePointer();

  return (
    <Link to="/blog/single" className="primary-blog" {...pointer}>
      <img src={data.cover} alt={data.title} />
      <div className="primary-content">
        <div className="primary-content-header">
          <span>
            {data.date.toLocaleDateString("en-us", {
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
          </span>
          <Clamp element="h4" clamp={2}>
            {data.title}
          </Clamp>
        </div>
        <Clamp clamp={4}>{data.content}</Clamp>
        <div className="author">
          <img src={data.avatar} alt="avatar" />
          <div className="author-info">
            <p>{data.author.name}</p>
            <p>{data.author.role}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DetailedFeedElement;
