import "./Slide.scss";

const Slide = ({
  first,
  slideRef,
  illustration: { src, alt },
  title,
  subtitle,
}) => {
  return (
    <div ref={slideRef} className={`login-slide ${first ? "first" : ""}`}>
      <img {...{ src, alt }} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Slide;
