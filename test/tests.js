// IMPORT MODULES under test here:
import { myFunction, addExclamationPoints } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

test('this test should add 3 exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);

    const expected1 = 'hello world!!!';

    const actual1 = addExclamationPoints('hello world');

    expect.equal(actual1, expected1, 'true - true');

    const expected2 = 'puppies!!!';

    const actual2 = addExclamationPoints('puppies');

    expect.equal(actual2, expected2, 'true - true');
});

test('function should take a number and multiply it by 7', (expect) => {
    const expected = '28';

    const actual = multiplyBySeven('4');

    expect.equal(actual, expected, 'num, 7');

    const expected1 = '28';

    const actual1 = multiplyBySeven('num');

    expect.equal(actual1, expected1, 'num, 7');

    const expected2 = '28';

    const actual2 = multiplyBySeven('num');

    expect.equal(actual2, expected2, 'num, 7');
});

test('function should take in a number and multiply it by 12 then cut the result in half', (expect) => {
    const expected = '10';

    const actual = divideThenMultiply('8', '4', '5');

    expect.equal(actual, expected, 'num, 7');
});
