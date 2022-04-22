import Tilt from "react-tilt";
import { usePointer } from "../../contexts/CustomCursorProvider";
import "./PricingCard.scss";

const PricingCard = ({
  name,
  description,
  illustration,
  mostPopular,
  price,
  currency,
  features,
}) => {
  const pointer = usePointer();

  return (
    <Tilt
      options={{
        max: 7,
        scale: 1.025,
        speed: 2000,
      }}
    >
      <div className="pricing-card">
        <Tilt
          options={{
            max: 7,
            scale: 1.0,
            speed: 2000,
          }}
        >
          <div className="illustration">
            <img src={illustration} alt={name} />
          </div>
          <div className="pricing-card-header">
            <h5>{name}</h5>
            <p>{description}</p>
          </div>

          <div className="price">
            <h6>
              <span className="currency">{currency}</span>
              <span className="price-number">{price}</span>
            </h6>
            <span>/month</span>
          </div>
          <div className="separator" />
          <ul className="features">
            {features.map((feature, i) => (
              <li key={`price-feature-${i}`}>{feature}</li>
            ))}
          </ul>

          <div className="select">
            <button {...pointer}>Select the {name} plan</button>
          </div>
        </Tilt>
      </div>
    </Tilt>
  );
};

export default PricingCard;
