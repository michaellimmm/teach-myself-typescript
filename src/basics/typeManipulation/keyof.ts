type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // type M = string | number
/*
 * Note that M is string | number -- this is because Javascript object keys
 * are always coerced to a string, so obj[0] always coerced to a string, so
 * obj[0] is always the same as obj["0"]
 */
