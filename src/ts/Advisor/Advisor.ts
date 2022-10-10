import Characters from "../Characters";

class Advisor extends Characters {
  assessoring: string;
  message: "I don't know why, but I think I'm gonna die soon";

  constructor(
    charactersName: string,
    familyName: string,
    ageOfCharacters: number,
    assessoringTo: string
  ) {
    super(charactersName, familyName, ageOfCharacters);

    this.assessoring = assessoringTo;
  }

  communication(): string {
    return `${this.message}`;
  }
}

export default Advisor;
