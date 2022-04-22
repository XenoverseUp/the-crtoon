import Carousel from "./Carousel/Carousel";
import Slide from "./Slide/Slide";
import highlightData, { slides } from "../../../../data/homeHighlights";
import "./Highlights.scss";
import "./MediaQueries.scss";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="wrapper">
        <h3>{highlightData.title}</h3>
        <Carousel>
          {slides.map((data, i) => (
            <Slide key={`slide-${i}`} {...{ data }} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Highlights;
