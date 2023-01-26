type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];

type I1 = Person['age' | 'name'];
// type I1 = string | number

type I2 = Person[keyof Person];
// type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
// type I3 = string | boolean

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person1 = (typeof MyArray)[number];
type Age1 = (typeof MyArray)[number]['age'];
type Age2 = Person1['age'];
