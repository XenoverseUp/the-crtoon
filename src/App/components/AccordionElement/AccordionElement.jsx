import { Children, isValidElement, cloneElement } from "react";
import "./AccordionElement.scss";

const AccordionElement = ({ children, cardId, state, setState, refs }) => {
  const updatedChildren = Children.map(children, child =>
    isValidElement(child)
      ? cloneElement(child, {
          refs,
          cardId,
          state,
          setState,
          isActive: state.isOpen && state.activeCard === cardId,
        })
      : child
  );

  return <div className="accordion-element">{updatedChildren}</div>;
};

export default AccordionElement;
