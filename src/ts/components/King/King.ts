import Characters from "../Characters.js";
import Component from "../Component.js";

class King extends Component implements Characters {
  name: string;
  family: string;
  age: number;
  alive: true;
  message: "You are all gonna die!";
  show: "Game of Thrones";
  reignYears: number;

  constructor(
    name: string,
    family: string,
    age: number,
    reignYearsCount: number,
    fatherElement: HTMLElement
  ) {
    super(fatherElement, "card", "card");
    this.name = name;
    this.family = family;
    this.age = age;
    this.reignYears = reignYearsCount;
  }

  communication(): string {
    return `${this.message}`;
  }

  render() {
    super.render();

    this.domElement.innerHTML = `<li><div class="card character__card">
    <img class="character__picture card-img-top" src="https://github.com/isdi-coders-2022/bootcamp-202209-bcn/blob/master/week3/challenges/challenge1/img/joffrey.jpg?raw=true" alt="Game of thrones character Joffrey" />
    
    <div class="card-body">
    <h2 class="character__name card-title h4">Joffrey Baratheon</h2>
    </div>
    <div class="character__info">
    <ul class="list-unstyled>
    <li>16 years</li>
    <li>State: Alive</li>
    </ul>
    </div>

    <div class="character__overlay">
    <ul class="list-unstyled">
      <li>Reign Years: 2</li>
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

export default King;
