import Component from "../Component.js";
import Characters from "../Characters.js";

class Advisor extends Component implements Characters {
  name: string;
  family: string;
  age: number;
  alive: true;
  message: "I don't know why, but I think I'm gonna die soon";
  show: "Game of Thrones";
  assessoring: string;

  constructor(
    name: string,
    family: string,
    age: number,
    assessoring: string,
    fatherElement: HTMLElement
  ) {
    super(fatherElement, "card", "card");
    this.assessoring = assessoring;
    this.name = name;
    this.family = family;
    this.age = age;
  }

  communication(): string {
    return `${this.name}`;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `<li><div class="card character__card">
    <img class="character__picture card-img-top" src="https://raw.githubusercontent.com/isdi-coders-2022/bootcamp-202209-bcn/master/week3/challenges/challenge1/img/tyrion.jpg" alt="Game of thrones character Tyrion" />
    
    <div class="card-body">
    <h2 class="character__name card-title h4">Tyrion Lannister</h2>
    </div>
    <div class="character__info">
    <ul class="list-unstyled>
    <li>40 years</li>
    <li>State: Alive</li>
    </ul>
    </div>

    <div class="character__overlay">
    <ul class="list-unstyled">
      <li>Assessor of: ${this.assessoring}</li>
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

export default Advisor;
