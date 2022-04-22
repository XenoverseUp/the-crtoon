import homeFirstBody from "../../../../data/homeFirstBody";
import "./FirstBody.scss";
import "./MediaQueries.scss";

const FirstBody = () => {
  return (
    <section className="first-body">
      <div className="wrapper">
        <div
          className="img"
          style={{
            background: `url(${homeFirstBody.cover.src}) center / 75% `,
          }}
        ></div>
        <article>
          <h3>{homeFirstBody.title}</h3>
          <p>{homeFirstBody.content}</p>
        </article>
      </div>
    </section>
  );
};

export default FirstBody;
