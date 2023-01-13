// IMPORT MODULES under test here:
import {
    myFunction,
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
} from '../functions.js';

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

    const expected1 = '21';
    const actual1 = multiplyBySeven('3');
    expect.equal(actual1, expected1, '3, 21');

    const expected2 = '14';
    const actual2 = multiplyBySeven('2');
    expect.equal(actual2, expected2, '3, 14');
});

test('function should take in a number and multiply it by 12 then cut the result in half', (expect) => {
    const expected = '24';
    const actual = multiplyBy12ThenHalve(4);
    expect.equal(actual, expected);

    const expected1 = '12';
    const actual1 = multiplyBy12ThenHalve(2);
    expect.equal(actual1, expected1);

    const expected2 = '18';
    const actual2 = multiplyBy12ThenHalve(3);
    expect.equal(actual2, expected2);
});

test('function should take in 3 numbers and return those numbers in an array', (expect) => {
    const expected = [2, 6, 4];
    const actual = returnAsAnArray(2, 6, 4);
    expect.deepEqual(actual, expected);

    const expected1 = [8, 4, 5];
    const actual1 = returnAsAnArray(8, 4, 5);
    expect.deepEqual(actual1, expected1);

    const expected2 = [1, 2, 8];
    const actual2 = returnAsAnArray(1, 2, 8);
    expect.deepEqual(actual2, expected2);
});

test('function should take in 3 numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '845';
    const actual = returnAsAString(8, 4, 5);
    expect.deepEqual(actual, expected);

    const expected1 = '234';
    const actual1 = returnAsAString(2, 3, 4);
    expect.deepEqual(actual1, expected1);

    const expected2 = '564';
    const actual2 = returnAsAString(5, 6, 4);
    expect.deepEqual(actual2, expected2);
});

test('This function should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12';
    const actual = makeLuckyGreeting(6, 6);
    expect.deepEqual(actual, expected);

    const expected1 = 'Hello! Your lucky number for the day is 12';
    const actual1 = makeLuckyGreeting(8, 4);
    expect.deepEqual(actual1, expected1);

    const expected2 = 'Hello! Your lucky number for the day is 12';
    const actual2 = makeLuckyGreeting(3, 9);
    expect.deepEqual(actual2, expected2);
});

test('This function should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';
    const actual = getSecondItem[('kiwi', 'apple', 'orange', 'plum')];
    expect.deepEqual(actual, expected);
});
