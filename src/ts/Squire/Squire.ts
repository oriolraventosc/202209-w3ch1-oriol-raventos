import Characters from "../Characters";

class Squire extends Characters {
  serves: string;
  admireLevel: number;
  message: "I'm a loser";

  constructor(
    charactersName: string,
    familyName: string,
    ageOfCharacters: number,
    servesTo: string,
    admireLevelGrade: number
  ) {
    super(charactersName, familyName, ageOfCharacters);

    this.serves = servesTo;
    this.admireLevel = admireLevelGrade;
  }

  communication(): string {
    return `${this.message}`;
  }

  checkAdmireLevel() {
    if (this.admireLevel < 0) {
      this.admireLevel = 0;
    } else if (this.admireLevel > 10) {
      this.admireLevel = 10;
    }
  }
}

export default Squire;
