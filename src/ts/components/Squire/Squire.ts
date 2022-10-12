import Characters from "../Characters";
import Component from "../Component.js";

class Squire extends Component implements Characters {
  name: string;
  family: string;
  age: number;
  alive: true;
  show: "Game of Thrones";
  serves: string;
  admireLevel: number;
  message: "I'm a loser";

  constructor(
    name: string,
    family: string,
    age: number,
    servesTo: string,
    admireLevelGrade: number,
    fatherElement: HTMLElement
  ) {
    super(fatherElement, "card", "card");
    this.name = name;
    this.family = family;
    this.age = age;
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

  render() {
    super.render();

    this.domElement.innerHTML = `<li><div class="card character__card">
    <img class="character__picture card-img-top" src="https://github.com/isdi-coders-2022/bootcamp-202209-bcn/blob/master/week3/challenges/challenge1/img/bronn.jpg?raw=true" alt="Game of thrones character Tyrion" />
    
    <div class="card-body">
    <h2 class="character__name card-title h4">Bronn Blackwater</h2>
    </div>
    <div class="character__info">
    <ul class="list-unstyled>
    <li>16 years</li>
    <li>State: Alive</li>
    </ul>
    </div>

    <div class="character__overlay">
    <ul class="list-unstyled">
      <li>Admiring level: ${this.admireLevel}</li>
      <li>Serving: ${this.serves}</li>
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

export default Squire;
