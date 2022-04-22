import { contributors } from "../../../../../data/homeIntro";
import "./Contributors.scss";

const Contributors = () => {
  return (
    <div className="contributors-container">
      {contributors.slice(0, 3).map(({ name, icon }, i) => (
        <span
          key={`contributors-${i}`}
          style={{
            background: `url(${icon}) no-repeat center / cover`,
            zIndex: i + 1,
          }}
        >
          <div className="tooltip">{name}</div>
        </span>
      ))}

      {contributors.length > 3 && (
        <>
          <div className="more">
            <p>and more...</p>
            <div className="tooltip-more">
              {contributors.slice(3).map(({ name }, i) => (
                <span key={`rest-contributors-${i}`}>{name}</span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contributors;
