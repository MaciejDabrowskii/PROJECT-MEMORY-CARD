import uniqid from "uniqid";

import charmander from "../assets/app-imgs/charmander.png";
import bulbasaur from "../assets/app-imgs/bulbasaur.png";
import squirtle from "../assets/app-imgs/squirtle.png";
import pikachu from "../assets/app-imgs/pikachu.png";
import articuno from "../assets/app-imgs/articuno.png";
import geodude from "../assets/app-imgs/geodude.png";
import koffing from "../assets/app-imgs/koffing.png";
import magnemite from "../assets/app-imgs/magnemite.png";
import mewtwo from "../assets/app-imgs/mewtwo.png";
import moltres from "../assets/app-imgs/moltres.png";
import omanyte from "../assets/app-imgs/omanyte.png";
import porygon from "../assets/app-imgs/porygon.png";
import psyduck from "../assets/app-imgs/psyduck.png";
import staryu from "../assets/app-imgs/staryu.png";
import weepinbell from "../assets/app-imgs/weepinbell.png";
import zapdos from "../assets/app-imgs/zapdos.png";

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
