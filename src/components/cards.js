import uniqid from "uniqid";

import charmander from "../assets/charmander.png";
import bulbasaur from "../assets/bulbasaur.png";
import squirtle from "../assets/squirtle.png";
import pikachu from "../assets/pikachu.png";
import articuno from "../assets/articuno.png";
import geodude from "../assets/geodude.png";
import koffing from "../assets/koffing.png";
import magnemite from "../assets/magnemite.png";
import mewtwo from "../assets/mewtwo.png";
import moltres from "../assets/moltres.png";
import omanyte from "../assets/omanyte.png";
import porygon from "../assets/porygon.png";
import psyduck from "../assets/psyduck.png";
import staryu from "../assets/staryu.png";
import weepinbell from "../assets/weepinbell.png";
import zapdos from "../assets/zapdos.png";

function Cards()
{
  const cards = [
    {
      name: "Charmander",
      imgUrl: charmander,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Bulbasaur",
      imgUrl: bulbasaur,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Squirtle",
      imgUrl: squirtle,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Pikachu",
      imgUrl: pikachu,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Porygon",
      imgUrl: porygon,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Weepinbell",
      imgUrl: weepinbell,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Psyduck",
      imgUrl: psyduck,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Omanyte",
      imgUrl: omanyte,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Articuno",
      imgUrl: articuno,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Geodude",
      imgUrl: geodude,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Koffing",
      imgUrl: koffing,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Magnemite",
      imgUrl: magnemite,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Mewtwo",
      imgUrl: mewtwo,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Moltres",
      imgUrl: moltres,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Staryu",
      imgUrl: staryu,
      clicked: false,
      id: uniqid(),
    },
    {
      name: "Zapdos",
      imgUrl: zapdos,
      clicked: false,
      id: uniqid(),
    },
  ];
  return cards;
}

export default Cards;
