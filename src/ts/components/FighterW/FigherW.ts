import Component from "../Component.js";

class FighterW extends Component {
  name: string;
  family: string;
  age: number;
  alive: true;
  message: "I first hit, and then ask";
  show: "Game of Thrones";
  weapon: string;
  dexterity: number;

  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    dexterity: number,
    fatherElement: HTMLElement
  ) {
    super(fatherElement, "card", "card");
    this.name = name;
    this.family = family;
    this.age = age;
    this.weapon = weapon;
    this.dexterity = dexterity;
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

  render() {
    super.render();
    this.domElement.innerHTML = `<li><div class="card character__card">
    <img class="character__picture card-img-top" src="https://github.com/isdi-coders-2022/bootcamp-202209-bcn/blob/master/week3/challenges/challenge1/img/daenerys.jpg?raw=true" alt="Game of thrones character Daenerys" />
    
    <div class="card-body">
    <h2 class="character__name card-title h4">Daenerys Targaryen</h2>
    </div>
    <div class="character__info">
    <ul class="list-unstyled>
    <li>40 years</li>
    <li>State: Alive</li>
    </ul>
    </div>

    <div class="character__overlay">
    <ul class="list-unstyled">
      <li>Weapon: Dragons</li>
      <li>Dexterity: 10</li>
      </ul>
    </div>
    <div class="character__actions">
    <button class="characer__action btn">Talk</button>
    <button class="character__action btn">Die</button>
    </div>

    </div></li>
    `;
  }
}

export default FighterW;
