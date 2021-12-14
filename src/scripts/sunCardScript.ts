import Operations from "../../classes/Operations";
import CardOperation from "../../classes/CardOperation";
import { ICardOperationsElements } from "../../interfaces/CardDomElements";

const sumElements: ICardOperationsElements = {
  container: document.querySelector(".sum-container"),
  number1: document.querySelector("#sum-number-1"),
  number2: document.querySelector("#sum-number-2"),
  buttonCalcular: document.querySelector("#sum-calcular"),
  result: document.createElement("span"),
};

const sumCard = new CardOperation(
  sumElements.container,
  sumElements.number1,
  sumElements.number2,
  sumElements.buttonCalcular,
  sumElements.result,
  Operations.sum
);

const renderSumCard = (): void => {
  return sumCard.calculate();
};

renderSumCard();