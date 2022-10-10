import Characters from "../Characters";

class King extends Characters {
  reignYears: number;
  message: "You are all gonna die!";

  constructor(
    charactersName: string,
    familyName: string,
    ageOfCharacters: number,
    reignYearsCount: number
  ) {
    super(charactersName, familyName, ageOfCharacters);

    this.reignYears = reignYearsCount;
  }

  communication(): string {
    return `${this.message}`;
  }
}

export default King;
