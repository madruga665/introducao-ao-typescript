import Operations from "../../classes/Operations";
import CardOperation from "../../classes/CardOperation";

const container = <HTMLDivElement>document.querySelector(".sum-container");
const number1 = <HTMLInputElement>document.querySelector("#sum-number-1");
const number2 = <HTMLInputElement>document.querySelector("#sum-number-2");
const buttonCalcular = <HTMLButtonElement>document.querySelector("#sum-calculate");
const result = <HTMLSpanElement>document.createElement("span");

buttonCalcular.addEventListener("click", () => {
  const sumCard = new CardOperation(Number(number1.value), Number(number2.value));
  result.innerHTML = String(Operations.sum(sumCard.number1, sumCard.number2));
  container.appendChild(result);
});
