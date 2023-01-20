export class Stack<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  push(...items: T[]) {
    this.items.push(...items);
  }

  pop(): T {
    if (this.items.length == 0) {
      throw new Error('The stack is empty!');
    }

    return this.items.pop()!;
  }

  isEmpty(): boolean {
    return this.items.length == 0;
  }

  length(): number {
    return this.items.length;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.items.length - 1];
  }

  toArray(): T[] {
    return [...this.items].reverse();
  }
}
