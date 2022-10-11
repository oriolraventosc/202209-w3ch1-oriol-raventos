import Advisor from "./components/Advisor/Advisor.js";
import King from "./components/King/King.js";
import Squire from "./components/Squire/Squire.js";
import FighterM from "./components/FighterM/FighterM.js";
import FighterW from "./components/FighterW/FigherW.js";

const container = document.querySelector(".root") as HTMLElement;

const joffrey = new King("Joffrey", "Baratheon", 16, 2, container);
joffrey.render();
const jaimie = new FighterM("Jaime", "Lannister", 45, "Espada", 7, container);
jaimie.render();
const daenerys = new FighterW(
  "Daenerys",
  "Targaryen",
  30,
  "Dragones",
  10,
  container
);
daenerys.render();
const tyrion = new Advisor("Tyrion", "Lannister", 40, "daenerys", container);
tyrion.render();
const bronn = new Squire("Bronn", "AguasNegras", 54, "jaime", 0, container);
bronn.render();

const charactersArray = [];
charactersArray.push(joffrey, jaimie, daenerys, tyrion, bronn);
