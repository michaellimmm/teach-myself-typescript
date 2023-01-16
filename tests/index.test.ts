import { add } from "index";

describe('test add', function () {
    it('add 8 + 8', function () {
        let actual = add(8, 8);
        let expected = 16;

        expect(actual).toEqual(expected);
    });
});