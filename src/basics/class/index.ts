class NewPerson {
  /**
   * Typescript provides three access modifiers to class properties and methods:
   * `private`, `protected`, `public`, and `readonly`.
   */

  // The `protected` modifier allows access within the same class and subclasses
  protected ssn: string;
  // The `private` modifier allows access within the same class
  private _firstName: string;
  private _lastName: string;

  // Use the readonly access modifier to mark a class property as immutable.
  // A readonly property must be initialized as a part of declaration or in
  // the constructor of the same class
  readonly birthDate: Date;

  private _isMarried?: boolean;

  constructor(
    ssn: string,
    firstName: string,
    lastName: string,
    birthDate: Date,
  ) {
    this.ssn = ssn;
    this._firstName = firstName;
    this._lastName = lastName;
    this.birthDate = birthDate;
  }

  // [Alternative]
  // To make the code shorter, TypeScript allows you to both declare properties
  // and initialize them in the constructor like this:
  // constructor(protected ssn: string, private firstName: string, private lastName: string) {
  //   this.ssn = ssn;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  // }

  // setter
  set isMarried(isMarried: boolean) {
    this._isMarried = isMarried;
  }

  // getter
  get isMerried(): boolean {
    if (typeof this._isMarried === 'undefined') {
      return false;
    }

    return this._isMarried;
  }

  // The `public` modifier allows access from any location
  public get fullname(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  describe(): string {
    return `This is ${this.fullname}`;
  }
}

let person = new NewPerson(
  '171-28-0926',
  'John',
  'Doe',
  new Date(1990, 12, 25),
);
console.log(person.fullname); // => John Doe

/**
 * Inheritance
 */
class Employee extends NewPerson {
  // static property
  private static headcount: number = 0;

  constructor(
    ssn: string,
    firstName: string,
    lastName: string,
    birthDate: Date,
    private occupation: string,
  ) {
    // call the constructor of the NewPerson class
    super(ssn, firstName, lastName, birthDate);

    Employee.headcount++;
  }

  // static method
  public static getHeadcount() {
    return Employee.headcount;
  }

  // method overriding
  describe(): string {
    return `${super.describe()}. I'm a ${this.occupation}.`;
  }
}

let employee1 = new Employee(
  '171-28-0926',
  'John',
  'Doe',
  new Date(1990, 12, 25),
  'Web Developer',
);
console.log(employee1.describe()); // => This is John Doe I'm a Web Developer.

let employee2 = new Employee(
  '171-28-0911',
  'Jane',
  'Doe',
  new Date(1990, 1, 14),
  'Web Developer',
);

console.log(`Total employee headcount: ${Employee.getHeadcount()}`); // => Total employee headcount: 2

/**
 *  Abstract Class
 */
abstract class NewEmployee {
  constructor(private firstName: string, private lastName: string) {}

  // abstract method. each derived class must implement this method
  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.firstName} make ${this.getSalary()} a month.`;
  }
}

class FullTimeEmployee extends NewEmployee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends NewEmployee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number,
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement()); // => John make 12000 a month.
console.log(jane.compensationStatement()); // => Jane make 16000 a month.
