export default class Pokemon {
  private _name: string;
  private _type: string;
  private _picture: string;
  private _id: number;

  constructor(name: string, type: string, picture: string, id: number) {
    this._name = name;
    this._type = type;
    this._picture = picture;
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get picture(): string {
    return this._picture;
  }

  get id(): number {
    return this._id;
  }

  set name(name: string) {
    this._name = name;
  }

  set type(type: string) {
    this._type = type;
  }

  set picture(picture: string) {
    this._picture = picture;
  }

  set id(id: number) {
    this._id = id;
  }
}