import AccordionContent from "../../../../components/AccordionContent/AccordionContent";
import AccordionElement from "../../../../components/AccordionElement/AccordionElement";
import AccordionTitle from "../../../../components/AccordionTitle/AccordionTitle";
import AccordionWrapper from "../../../../components/AccordionWrapper/AccordionWrapper";
import homeFAQ from "../../../../data/homeFAQ";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="wrapper">
        <div className="faq-header">
          <span>FAQ</span>
          <h3>
            Have Any <span>Questions</span>?
          </h3>
        </div>
        <AccordionWrapper>
          {homeFAQ.map(({ title, content }, i) => (
            <AccordionElement key={`accordion-element-${i}`}>
              <AccordionTitle>{title}</AccordionTitle>
              <AccordionContent>{content}</AccordionContent>
            </AccordionElement>
          ))}
        </AccordionWrapper>
      </div>
    </section>
  );
};

export default FAQ;
