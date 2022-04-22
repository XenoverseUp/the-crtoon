import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import "./AccordionTitle.scss";

const AccordionTitle = ({ children, isActive, setState, state, cardId }) => {
  return (
    <div
      className="accordion-title"
      onClick={() => {
        if (state.isOpen && isActive)
          setState({
            activeCard: null,
            isOpen: false,
          });
        else if (!state.isOpen || (state.isOpen && !isActive))
          setState({
            isOpen: true,
            activeCard: cardId,
          });
      }}
    >
      <AiOutlineMinus />
      <h5>{children}</h5>
      <div className={`icon ${isActive ? "active" : ""}`}>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default AccordionTitle;
