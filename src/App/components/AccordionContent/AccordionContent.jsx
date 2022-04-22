import "./AccordionContent.scss";

const AccordionContent = ({
  children,
  refs: { contentContainerRef, textRef },
}) => {
  return (
    <div className="accordion-content-container" ref={contentContainerRef}>
      <div className="content" ref={textRef}>
        {children}
      </div>
    </div>
  );
};

export default AccordionContent;
