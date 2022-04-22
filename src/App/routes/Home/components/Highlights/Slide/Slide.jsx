import { GoPrimitiveDot } from "react-icons/go";
import Clamp from "../../../../../components/Clamp";
import { usePointer } from "../../../../../contexts/CustomCursorProvider";
import "./Slide.scss";
import "./MediaQueries.scss";

const Slide = ({
  slideId,
  disabled,
  handleNext,
  handlePrevious,
  slideRef,
  imgRef,
  paragraphRef,
  headerRef,
  data: { name, cover, year, genre, rating, description },
}) => {
  const pointer = usePointer();

  return (
    <div className="slide" ref={slideRef}>
      <div className="container">
        <article>
          <div className="slide-header">
            <h4 ref={headerRef}>{name}</h4>
            <div className="info">
              <span>{year}</span>
              <GoPrimitiveDot />
              <span>{genre}</span>
              <GoPrimitiveDot />
              <span>{rating} / 10</span>
            </div>
          </div>

          <Clamp clamp={5} ref={paragraphRef}>
            {description}
          </Clamp>
          <div className="controllers">
            <button {...{ disabled }} {...pointer} onClick={handlePrevious}>
              Previous
            </button>
            <button {...{ disabled }} {...pointer} onClick={handleNext}>
              Next
            </button>
          </div>
        </article>
        <aside data-id={`${slideId + 1}`}>
          <img ref={imgRef} src={cover} alt={name} />
        </aside>
      </div>
    </div>
  );
};

export default Slide;
