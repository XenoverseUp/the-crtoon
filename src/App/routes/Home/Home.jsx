import Intro from "./components/Intro/Intro";
import FirstBody from "./components/FirstBody/FirstBody";
import SecondBody from "./components/SecondBody/SecondBody";
import ThirdBody from "./components/ThirdBody/ThirdBody";
import FourthBody from "./components/FourtBody/FourthBody";
import Highlights from "./components/Highlights/Highlights";
import TopRankeds from "./components/TopRankeds/TopRankeds";
import FAQ from "./components/FAQ/FAQ";
import Pricing from "./components/Pricing/Pricing";
import Stripe from "./components/Stripe/Stripe";
import { Footer } from "../../components";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <FirstBody />
      <SecondBody />
      <ThirdBody />
      <FourthBody />
      <Highlights />
      <TopRankeds />
      <Stripe />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
