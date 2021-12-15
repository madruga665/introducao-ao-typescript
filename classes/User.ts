export default class User {
  private _name: string;
  private _email: string;
  private _profilePicture: string;
  private _birthdate: Date;

  constructor(name: string, email: string, profilePicture: string, birthdate: Date) {
    this._name = name;
    this._email = email;
    this._profilePicture = profilePicture;
    this._birthdate = birthdate;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get profilePicture(): string {
    return this._profilePicture;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  set name(name: string) {
    this._name = name;
  }

  set email(email: string) {
    this._email = email;
  }

  set birthdate(birthdate: Date) {
    this._birthdate = birthdate;
  }

  set profilePicture(profilePicture: string) {
    this._profilePicture = profilePicture;
  }

  getAge(): number {
    const today = new Date();
    const age = today.getFullYear() - this.birthdate.getFullYear();
    const month = today.getMonth() - this.birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < this.birthdate.getDate())) {
      return age - 1;
    }
    return age;
  }

  apresentation(): string {
    return `Olá, meu nome é ${this.name} e meu email é ${
      this.email
    } e tenho ${this.getAge()} anos.`;
  }
}
