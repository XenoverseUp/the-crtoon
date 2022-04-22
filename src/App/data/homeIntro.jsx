// Contributors
import Netflix from "../assets/img/home-intro-contributors/netflix.png";
import HBO from "../assets/img/home-intro-contributors/hbo.jpg";
import Disney from "../assets/img/home-intro-contributors/disney.jpg";
import Amazon from "../assets/img/home-intro-contributors/amazon.jpg";

// Intro images

import IntroImg from "../assets/img/home-intro-img/intro.png";

export default {
  title: (
    <>
      Why don't you take a step into the <span>CRTOON</span> ?
    </>
  ),
  content: (
    <>
      Cartoon series are our favorites since we were a child who watches them
      before going to school, in the morning. So, we took this passion and
      converted it into the <b>CRTOON</b>. It is free now. Be quick to get your
      15 days free offer.
    </>
  ),
  img: {
    src: IntroImg,
    alt: "rick and morty",
  },
};

export const contributors = [
  {
    name: "Netflix",
    icon: Netflix,
    link: "https://www.netflix.com/",
  },
  {
    name: "HBO",
    icon: HBO,
    link: "https://www.hbo.com/",
  },
  {
    name: "Disney",
    icon: Disney,
    link: "https://www.disneyplus.com/tr-tr",
  },
  {
    name: "Amazon",
    icon: Amazon,
    link: "https://www.amazon.com.tr/prime",
  },
  {
    name: "Google",
    link: "https://www.google.com.tr/",
  },
];
