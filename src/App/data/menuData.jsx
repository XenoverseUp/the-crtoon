import RickAndMorty from "../assets/img/menu-img/rick-and-morty.webp";
import Disenchantment from "../assets/img/menu-img/disenchantment.webp";
import FamilyGuy from "../assets/img/menu-img/family-guy.webp";
import Futurama from "../assets/img/menu-img/futurama.webp";
import BojackHorseman from "../assets/img/menu-img/bojack-horseman.webp";

const menuData = {
  links: [
    {
      name: "Sign In",
      path: "/sign-in",
    },
    {
      name: "Register",
      path: "/register",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ],
  info: {
    title: "Our mission",
    content: `One morning, when Gregor Samsa woke from troubled dreams, he
    found himself transformed in his bed into a horrible vermin. He
    lay on his armour-like back, and if he lifted his head a little
    he could see his brown belly, slightly domed and divided by
    arches into stiff sections.`,
  },
  previews: [
    {
      name: "Rick and Morty",
      cover: RickAndMorty,
    },
    {
      name: "Disenchantment",
      cover: Disenchantment,
    },
    {
      name: "Family Guy",
      cover: FamilyGuy,
    },
    {
      name: "Futurama",
      cover: Futurama,
    },
    {
      name: "Bojack Horseman",
      cover: BojackHorseman,
    },
  ],
};

export default menuData;
