import "./ThirdBody.scss";
import "./MediaQueries.scss";
import homeThirdBody from "../../../../data/homeThirdBody";

const ThirdBody = () => {
  return (
    <div className="third-body">
      <div className="wrapper">
        <div
          className="img"
          style={{
            background: `url(${homeThirdBody.cover.src}) no-repeat center / cover`,
          }}
        />
        <article>
          <h3>{homeThirdBody.title}</h3>
          <p>{homeThirdBody.content}</p>
        </article>
      </div>
    </div>
  );
};

export default ThirdBody;
