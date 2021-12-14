import CardOperation from "../../classes/CardOperation";
import Operations from "../../classes/Operations";
import { ICardOperationsElements } from "../../interfaces/CardDomElements";

const subtractElements: ICardOperationsElements = {
  container: document.querySelector(".subtract-container"),
  number1: document.querySelector("#subtract-number-1"),
  number2: document.querySelector("#subtract-number-2"),
  buttonCalcular: document.querySelector("#subtract-calcular"),
  result: document.createElement("span"),
}

const subtractCard = new CardOperation(
  subtractElements.container,
  subtractElements.number1,
  subtractElements.number2,
  subtractElements.buttonCalcular,
  subtractElements.result,
  Operations.subtract
);

const rendersubtractCard = (): void => {
  return subtractCard.calculate();
};

rendersubtractCard();