import "./SecondBody.scss";
import "./MediaQueries.scss";
import homeSecondBody from "../../../../data/homeSecondBody";

const SecondBody = () => {
  return (
    <section className="second-body">
      <div className="wrapper">
        <article>
          <h3>{homeSecondBody.title}</h3>
          <p>{homeSecondBody.content}</p>
        </article>
        <div
          className="img"
          style={{
            background: `url(${homeSecondBody.cover.src}) no-repeat center / cover`,
          }}
        />
      </div>
    </section>
  );
};

export default SecondBody;
