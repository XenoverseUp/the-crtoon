import { Children, cloneElement, useEffect, useRef, useState } from "react";
import usePrevious from "../../../../../hooks/usePrevious";
import {
  addSlide,
  clipCover,
  fadeInSlide,
  fadeOutSlide,
  moveHeader,
  moveParagraphs,
  removeSlide,
} from "../../../../../animations/carouselAnimations";

import "./Carousel.scss";
import "./MediaQueries.scss";

const Carousel = ({ children }) => {
  const elements = Children.toArray(children);
  const [activeSlide, setActiveSlide] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const previous = usePrevious(activeSlide);
  let slideRefs = useRef([]);
  let imgRefs = useRef([]);
  let paragraphRefs = useRef([]);
  let headerRefs = useRef([]);
  let updatedElements = [];

  const { length } = elements;

  const handleNext = () =>
    setActiveSlide(activeSlide === length - 1 ? 0 : activeSlide + 1);

  const handlePrevious = () =>
    setActiveSlide(activeSlide === 0 ? length - 1 : activeSlide - 1);

  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 800);
  };

  for (let i = 0; i < length; i++) {
    let updatedElement = cloneElement(elements[i], {
      slideRef: el => (slideRefs.current[i] = el),
      imgRef: el => (imgRefs.current[i] = el),
      paragraphRef: el => (paragraphRefs.current[i] = el),
      headerRef: el => (headerRefs.current[i] = el),
      slideId: i,
      key: i,
      disabled,
      handleNext,
      handlePrevious,
    });

    updatedElements = [...updatedElements, updatedElement];
  }

  useEffect(() => {
    disableMenu();
    fadeOutSlide(slideRefs.current[previous]);
    removeSlide(slideRefs.current[previous]);
    addSlide(slideRefs.current[activeSlide]);
    fadeInSlide(slideRefs.current[activeSlide]);
    clipCover(imgRefs.current[activeSlide]);
    moveParagraphs(paragraphRefs.current[activeSlide]);
    moveHeader(headerRefs.current[activeSlide]);
  }, [activeSlide]);

  return <div className="carousel">{updatedElements}</div>;
};

export default Carousel;
