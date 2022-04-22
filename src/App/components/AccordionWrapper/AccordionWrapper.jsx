import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { closeAccordion, openAccordion } from "../../animations/FAQAnimations";
import usePrevious from "../../hooks/usePrevious";
import "./AccordionWrapper.scss";

const AccordionWrapper = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    activeCard: null,
  });
  const previous = usePrevious(state);

  const contentContainerRefs = useRef([]);
  const textRefs = useRef([]);

  const updatedChildren = Children.map(children, (child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          refs: {
            contentContainerRef: el => (contentContainerRefs.current[i] = el),
            textRef: el => (textRefs.current[i] = el),
          },
          cardId: i,
          state,
          setState,
        })
      : child
  );

  useEffect(() => {
    if (previous === undefined) return;

    if (state.isOpen && previous.activeCard === null)
      return openAccordion({
        contentContainerRef: contentContainerRefs.current[state.activeCard],
        textRef: textRefs.current[state.activeCard],
      });
    else if (!state.isOpen && state.activeCard === null)
      return closeAccordion({
        contentContainerRef: contentContainerRefs.current[previous.activeCard],
        textRef: textRefs.current[previous.activeCard],
      });

    openAccordion({
      contentContainerRef: contentContainerRefs.current[state.activeCard],
      textRef: textRefs.current[state.activeCard],
    });

    closeAccordion({
      contentContainerRef: contentContainerRefs.current[previous.activeCard],
      textRef: textRefs.current[previous.activeCard],
    });
  }, [state]);

  return <div className="accordion-wrapper">{updatedChildren}</div>;
};

export default AccordionWrapper;
