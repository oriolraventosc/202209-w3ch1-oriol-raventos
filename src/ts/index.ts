import Advisor from "./Advisor/Advisor";
import Fighter from "./Fighter/Fighter";
import King from "./King/King";
import Squire from "./Squire/Squire";

const joffrey = new King("Joffrey", "Baratheon", 16, 2);
const jaimie = new Fighter("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Fighter("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Advisor("Tyrion", "Lannister", 40, "daenerys");
const bronn = new Squire("Bronn", "AguasNegras", 54, "jaime", 0);

const charactersArray = [];
charactersArray.push(joffrey, jaimie, daenerys, tyrion, bronn);
