import { add } from 'index';

describe('test add', function () {
  it('add 8 + 8', function () {
    const actual = add(8, 8);
    const expected = 16;

    expect(actual).toEqual(expected);
  });
});
