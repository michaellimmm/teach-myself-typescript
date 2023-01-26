interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
// type Example2 = string

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: number | string): IdLabel | NameLabel;
function createLabel(nameOrId: number | string): IdLabel | NameLabel {
  if (typeof nameOrId === 'string') {
    return { name: nameOrId };
  }

  return { id: nameOrId };
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel2<T extends number | string>(idOrName: T): NameOrId<T>;
function createLabel2(idOrName: number | string): NameOrId<number | string> {
  if (typeof idOrName === 'string') {
    return { name: idOrName };
  }

  return { id: idOrName };
}

let a = createLabel2('typescript');
// let a: NameLabel
let b = createLabel2(2.8);
// let b: IdLabel
let c = createLabel2(Math.random() ? 'hello' : 42);

// Conditional Type Constraints
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
// type EmailMessageContents = string

type DogMessageContents = MessageOf<Dog>;
// type DogMessageContents = never

type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;
// type Str = string

type Num = Flatten<number>;
// type Num = number

type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : never;

type Num1 = GetReturnType<() => number>;
// type Num = number

type Str1 = GetReturnType<(x: string) => string>;
// type Str = string

type Bools1 = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// type Bools = boolean[]

/**
 * when inferring from a type with multiple call signatures (such as the type of an overloaded function),
 * inferences are made from the last signature (which, presumably, is the most permissive catch-all case).
 * It is not possible to perform overload resolution based on a list of argument types.
 */

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;

// Distributive Conditional Types
type ToArray<T> = T extends any ? T[] : never;

type StrArrOrNumArr = ToArray<string | number>;
// type StrArrOrNumArr = string[] | number[]

type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

// 'StrArrOrNumArr2' is no longer a union
type StrArrOrNumArr2 = ToArrayNonDist<string | number>;
// type StrArrOrNumArr2 = (string | number)[]
