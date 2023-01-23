import { Stack } from '@src/basics/stack';

describe('Stack', function () {
  it('should stack data to stack', function () {
    const stack = new Stack<number>([3, 2]);
    stack.push(1);

    expect(stack.toArray()).toEqual([1, 2, 3]);
  });
});
