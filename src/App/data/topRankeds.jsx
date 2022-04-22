import RickAndMorty from "../assets/img/menu-img/rick-and-morty.webp";
import Disenchantment from "../assets/img/menu-img/disenchantment.webp";
import Futurama from "../assets/img/menu-img/futurama.webp";

export default {
  title: (
    <>
      These are the top 3 series on the <b>CRTOON</b>
    </>
  ),
  content: <>Click the items to see more information about them.</>,
};

export const rankeds = [
  {
    name: "Disenchantment",
    cover: Disenchantment,
    rating: 9.4,
    year: 2018,
    genre: "Sitcom",
    seasons: 2,
    description:
      'Disenchantment is an American adult fantasy animated sitcom created by Matt Groening for Netflix. The series is Groening\'s first production to appear exclusively on a streaming service; he previously created The Simpsons and Futurama for the Fox Broadcasting Company. Set in the medieval fantasy kingdom of Dreamland, the series follows the story of Bean, a rebellious and alcoholic princess, her naive elf companion Elfo, and her destructive "personal demon" Luci',
  },
  {
    name: "Rick and Morty",
    cover: RickAndMorty,
    rating: 9.6,
    year: 2013,
    genre: "Science Fiction & Sitcom",
    seasons: 4,
    description:
      "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime Adult Swim programming block. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.",
    most: true,
  },
  {
    name: "Futurama",
    cover: Futurama,
    rating: 9.3,
    year: 1999,
    genre: "Science Fiction & Sitcom",
    seasons: 10,
    description:
      "Futurama is an American science fiction animated sitcom created by Matt Groening that aired on Fox from March 28, 1999, to August 10, 2003, and on Comedy Central from March 23, 2008, to September 4, 2013. The series follows the adventures of slacker Philip J. Fry, who is cryogenically preserved for 1000 years and is revived in the 31st century. Fry finds work at an interplanetary delivery company, working alongside the one-eyed Leela and robot Bender.",
  },
];
