console.log(typeof 'Hello world'); // => string

/**
 * TypeScript adds a typeof operator you can use in a type context
 * refer to the type of variable or property
 */

let s = 'hello';
let n: typeof s; // equal `let n: string`

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>; // equal `type K = boolean`

function f() {
  return { x: 10, y: 3 };
}
type F = ReturnType<typeof f>;

/**
 * values and type aren't the same thing. To refer to the type
 * that the value f has, we use `typeof`
 */
