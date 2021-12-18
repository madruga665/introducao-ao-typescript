export default class CardOperation {
  private _number1: number;
  private _number2: number;

  constructor(number1: number, number2: number) {
    this._number1 = number1;
    this._number2 = number2;
  }

  get number1(): number {
    return this._number1;
  }

  get number2(): number {
    return this._number2;
  }
}
