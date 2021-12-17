import CardOperation from "../../classes/CardOperation";
import Operations from "../../classes/Operations";

const container = <HTMLDivElement>document.querySelector(".subtract-container");
const number1 = <HTMLInputElement>document.querySelector("#subtract-number-1");
const number2 = <HTMLInputElement>document.querySelector("#subtract-number-2");
const buttonCalcular = <HTMLButtonElement>document.querySelector("#subtract-calcular");
const result = <HTMLSpanElement>document.createElement("span");

const subtractCard = new CardOperation(
  number1.valueAsNumber,
  number2.valueAsNumber,
  Operations.subtract
);

buttonCalcular.addEventListener("click", () => {
  result.innerHTML = subtractCard.calculate().toString();
  container.appendChild(result);
});
