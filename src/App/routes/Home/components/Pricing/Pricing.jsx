import { PricingCard } from "../../../../components";
import homePricingData, { plans } from "../../../../data/homePricing";

import "./Pricing.scss";
import "./MediaQueries.scss";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="wrapper">
        <div className="pricing-header">
          <h3>{homePricingData.title}</h3>
          <p>{homePricingData.content}</p>
        </div>
        <div className="container">
          {plans.map((data, i) => (
            <PricingCard {...data} key={`pricing-card-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
