import ComponentStructure from "./ComponentStructure";

class Characters implements ComponentStructure {
  domElement: HTMLElement;
  name: string;
  family: string;
  age: number;
  alive: boolean;
  message: string;
  show: "The game of Thrones";

  constructor(
    charactersName: string,
    familyName: string,
    ageOfCharacters: number
  ) {
    this.name = charactersName;
    this.family = familyName;
    this.age = ageOfCharacters;
  }

  communication() {
    return `${this.message}`;
  }

  die() {
    this.alive = false;
  }
}

export default Characters;
