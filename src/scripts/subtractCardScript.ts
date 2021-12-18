import CardOperation from "../../classes/CardOperation";
import Operations from "../../classes/Operations";

const container = <HTMLDivElement>document.querySelector(".subtract-container");
const number1 = <HTMLInputElement>document.querySelector("#subtract-number-1");
const number2 = <HTMLInputElement>document.querySelector("#subtract-number-2");
const buttonCalcular = <HTMLButtonElement>document.querySelector("#subtract-calculate");
const result = <HTMLSpanElement>document.createElement("span");

buttonCalcular.addEventListener("click", () => {
  const subtractCard = new CardOperation(Number(number1.value), Number(number2.value));
  result.innerHTML = String(Operations.subtract(subtractCard.number1, subtractCard.number2));
  container.appendChild(result);
});

