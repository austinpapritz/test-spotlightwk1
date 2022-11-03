// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
    returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = addExclamationPoints('bunny rabbit');
    expect.equal(actual, expected, 'bunny rabbit!!!');

    const expected2 = 'BUNNY!!!';
    const actual2 = addExclamationPoints('BUNNY');
    expect.equal(actual2, expected2, 'BUNNY!!!');

    const expected3 = '24!!!';
    const actual3 = addExclamationPoints('24');
    expect.equal(actual3, expected3, '24!!!');
});

skip('this test should pass', (expect) => {
    const expected = 21;
    const actual = multiplyBySeven(3);
    expect.equal(actual, expected, 21);

    const expected2 = 3885;
    const actual2 = multiplyBySeven(555);
    expect.equal(actual2, expected2, 3885);

    const expected3 = 21;
    const actual3 = multiplyBySeven(1 + 2);
    expect.equal(actual3, expected3, 21);
});

skip('this test should pass', (expect) => {
    const expected = 36;
    const actual = multiplyBy12ThenHalve(6);
    expect.equal(actual, expected, 36);

    const expected2 = 144;
    const actual2 = multiplyBy12ThenHalve(4 * 6);
    expect.equal(actual2, expected2, 144);

    const expected3 = 43.2;
    const actual3 = multiplyBy12ThenHalve(7.2);
    expect.equal(actual3, expected3, 43.2);
});

skip('this test should be skipped', (expect) => {
    const expected = [1, 2, 3];
    const actual = returnAsAnArray(1, 2, 3);
    expect.deepEqual(actual, expected, [1, 2, 3]);

    const expected2 = [1, 2, 3];
    const actual2 = returnAsAnArray(1, 2, 1 + 2);
    expect.deepEqual(actual2, expected2, [1, 2, 3]);

    const expected3 = ['one', 'two', 'three'];
    const actual3 = returnAsAnArray('one', 'two', 'three');
    expect.deepEqual(actual3, expected3, ['one', 'two', 'three']);
});

test('this test should pass', (expect) => {
    const expected = '456';
    const actual = returnAsAString(4, 5, 6);
    expect.equal(actual, expected, '456');

    const expected2 = '435363';
    const actual2 = returnAsAString(43, 53, 63);
    expect.equal(actual2, expected2, '435363');

    const expected3 = '43.353.363.3';
    const actual3 = returnAsAString(43.3, 53.3, 63.3);
    expect.equal(actual3, expected3, '43.353.363.3');
});

test('this test should pass', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';
    const actual = makeLuckyGreeting(8, 4);
    expect.equal(actual, expected, 'Hello! Your lucky number for the day is 12.');

    const expected2 = 'Hello! Your lucky number for the day is -12.';
    const actual2 = makeLuckyGreeting(-8, -4);
    expect.equal(actual2, expected2, 'Hello! Your lucky number for the day is -12.');

    const expected3 = 'Hello! Your lucky number for the day is 12.';
    const actual3 = makeLuckyGreeting(7.5, 4.5);
    expect.equal(actual3, expected3, 'Hello! Your lucky number for the day is 12.');
});
