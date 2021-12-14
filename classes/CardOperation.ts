export default class CardOperation {
  private cardContainer: HTMLDivElement;
  private number1: HTMLInputElement;
  private number2: HTMLInputElement;
  private buttonCalcular: HTMLButtonElement;
  private result: HTMLSpanElement;
  operation: Function;
  constructor(
    cardContainer: HTMLDivElement,
    number1: HTMLInputElement,
    number2: HTMLInputElement,
    buttonCalcular: HTMLButtonElement,
    result: HTMLSpanElement,
    operation: Function
  ) {
    this.cardContainer = cardContainer;
    this.number1 = number1;
    this.number2 = number2;
    this.buttonCalcular = buttonCalcular;
    this.result = result;
    this.operation = operation;
  }
  calculate(): void {
      this.buttonCalcular.addEventListener("click", () => {
      this.result.innerHTML = String(this.operation(this.number1.valueAsNumber, this.number2.valueAsNumber));
      this.cardContainer.appendChild(this.result);
    });
  }
}
