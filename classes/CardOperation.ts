export default class CardOperation {
  private number1: number;
  private number2: number;
  operation: Function;
  constructor(number1: number, number2: number, operation: Function) {
    this.number1 = number1;
    this.number2 = number2;
    this.operation = operation;
  }
  calculate(): number {
    return this.operation(this.number1, this.number2);
  }
}
