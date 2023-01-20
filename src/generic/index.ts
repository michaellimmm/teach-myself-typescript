// generic functions
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>('Hello World')); // => Hello Wrold

let myIdentity: <T>(arg: T) => T = identity;
console.log(myIdentity('Hello World')); // => Hello Wrold

// We can also write the generic type as a call signature of an object literal type
let myIdentity2: { <T>(arg: T): T } = identity;
console.log(myIdentity2('Hello World 2')); // => Hello World 2

interface GenericIdentityFn {
  <T>(arg: T): T;
}
let myIdentity3: GenericIdentityFn = identity;
console.log(myIdentity3('Hello World 3')); // => Hello World 3

interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}

let myIdentity4: GenericIdentityFn2<number> = identity;
console.log(myIdentity4(40)); // => 40

// generic clases
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.add(10, 2)); // => 12

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = '';
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add('Hello ', 'World')); // => Hello World

// generic constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity({ length: 10, value: 3 })); // => { length: 10, value: 3 }
console.log(loggingIdentity([1, 2, 3])); // => [ 1, 2, 3 ]

// using type parameters in generic constrains
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, 'a')); // => 1

// Using class types in generics
function create<T>(c: { new (): T }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = 'Mikle';
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

let nameTag = createInstance(Lion).keeper.nametag;
console.log(nameTag); // => Mikle

let hasMask = createInstance(Bee).keeper.hasMask;
console.log(hasMask); // => true
