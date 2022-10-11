import ComponentStructure from "./components/ComponentStructure";

class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private fatherElement: HTMLElement,
    tag: string,
    className: string
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render() {
    this.fatherElement.appendChild(this.domElement);
  }
}

export default Component;
