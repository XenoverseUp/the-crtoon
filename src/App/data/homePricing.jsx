import Free from "../assets/img/pricing/free.png";
import Plus from "../assets/img/pricing/plus.png";
import Pro from "../assets/img/pricing/pro.png";

export default {
  title: <>Want to join the CRTOON?</>,
  content: (
    <>
      <b>Select</b> the plan that fits you perfectly and start having fun. Did
      you know that we have a free plan just for you to try it?
    </>
  ),
};

export const plans = [
  {
    name: "Free",
    description:
      "Free plan lets you try some cool features of the CRTOON. So, open an account and start to use Free plan.",
    illustration: Free,
    price: "0.99",
    currency: "$",
    mostPopular: false,
    features: [
      "Up to 3 hours usage per day",
      "Advertisements between episodes",
      "1 episode download at once",
      "1080p video quality",
    ],
  },
  {
    name: "Plus",
    description:
      "Plus plan is the #1 choice of the most users. You can choose Plus and enjoy the CRTOON with almost no limitations.",
    illustration: Plus,
    price: "9.99",
    currency: "$",
    mostPopular: true,
    features: [
      "Unlimited usage",
      "No interruptions between episodes",
      "10 episodes download at once",
      "2K video quality",
    ],
  },
  {
    name: "Pro",
    description:
      "If you want no limitations at all the Pro plan is perfect for you. Choose Pro plan and enjoy the CRTOON unlimitedly.",
    illustration: Pro,
    price: "16.99",
    currency: "$",
    mostPopular: false,
    features: [
      "Unlimited usage",
      "Unlimited episode downloads",
      "No advertisements at all",
      "4K video quality and Dolby Atmos sound",
    ],
  },
];
