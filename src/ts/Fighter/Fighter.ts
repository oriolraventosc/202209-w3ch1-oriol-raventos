import Characters from "../Characters";

class Fighter extends Characters {
  weapon: string;
  dexterity: number;
  message: string;

  constructor(
    charactersName: string,
    familyName: string,
    ageOfCharacters: number,
    weaponUse: string,
    dexterityLevel: number
  ) {
    super(charactersName, familyName, ageOfCharacters);

    this.weapon = weaponUse;
    this.dexterity = dexterityLevel;
  }

  communication(): string {
    return `${this.message}`;
  }

  checkDexterity() {
    if (this.dexterity < 0) {
      this.dexterity = 0;
    } else if (this.dexterity > 10) {
      this.dexterity = 10;
    }
  }
}

export default Fighter;
