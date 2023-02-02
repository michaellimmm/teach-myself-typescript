namespace Interface {
  export interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
    readonly ssn: string;
  }

  export interface StringFormat {
    (str: string, isUpper: boolean): string;
  }

  export interface Json {
    toJson(): string;
  }

  export class ClassPerson implements Json {
    constructor(private firstName: string, private lastName: string) {}

    toJson(): string {
      return JSON.stringify(this);
    }
  }

  export interface Mailable {
    send(email: string): boolean;
    queue(email: string): boolean;
  }

  export interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean;
  }

  export class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
      console.log(`send an email to ${email} after ${after} ms`);
      return true;
    }
    send(email: string): boolean {
      console.log(`send an email to ${email}`);
      return true;
    }
    queue(email: string): boolean {
      console.log(`queue an email to ${email}`);
      return true;
    }
  }
}

function getFullName(person: Interface.Person) {
  if (person.middleName) {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }

  return `${person.firstName} ${person.lastName}`;
}

let person1: Interface.Person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe',
};

console.log(getFullName(person1)); // => John Doe

// function types
let format: Interface.StringFormat;
format = function (src: string, isUpper: boolean): string {
  return isUpper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true)); // => HI

let person2 = new Interface.ClassPerson('John', 'Doe');
console.log(person2.toJson()); // => {"firstName":"John","lastName":"Doe"}
