import Operations from "../../classes/Operations";
import CardOperation from "../../classes/CardOperation";

const container = <HTMLDivElement>document.querySelector(".sum-container");
const number1 = <HTMLInputElement>document.querySelector("#sum-number-1");
const number2 = <HTMLInputElement>document.querySelector("#sum-number-2");
const buttonCalcular = <HTMLButtonElement>document.querySelector("#sum-calcular");
const result = <HTMLSpanElement>document.createElement("span");

const sumCard = new CardOperation(number1.valueAsNumber, number2.valueAsNumber, Operations.sum);

buttonCalcular.addEventListener("click", () => {
  result.innerHTML = sumCard.calculate().toString();
  container.appendChild(result);
});
