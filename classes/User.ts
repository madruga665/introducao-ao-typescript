export default class User {
  private name: string;
  private email: string;
  private profilePicture: string;
  private birthdate: Date;

  constructor(name: string, email: string, profilePicture: string, birthdate: Date) {
    this.name = name;
    this.email = email;
    this.profilePicture = profilePicture;
    this.birthdate = birthdate;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getProfilePicture(): string {
    return this.profilePicture;
  }

  getBirthdate(): Date {
    return this.birthdate;
  }

  setName(name: string): void {
    this.name = name;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setBirthdate(birthdate: Date): void {
    this.birthdate = birthdate;
  }

  setProfilePicture(profilePicture: string): void {
    this.profilePicture = profilePicture;
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
