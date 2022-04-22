import homeFourthBody from "../../../../data/homeFourthBody";
import DownloadAppButton from "./DownloadAppButton/DownloadAppButton";
import "./FourthBody.scss";
import "./MediaQueries.scss";

const FourthBody = () => {
  return (
    <section className="fourth-body">
      <div className="wrapper">
        <h3>{homeFourthBody.title}</h3>
        <div className="container">
          <article>
            <p>{homeFourthBody.content}</p>
            <div className="download">
              <DownloadAppButton platform="apple" />
              <DownloadAppButton platform="google" />
            </div>
          </article>
          <img src={homeFourthBody.cover.src} alt={homeFourthBody.cover.alt} />
        </div>
      </div>
    </section>
  );
};

export default FourthBody;
