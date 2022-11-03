// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
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

test('this test should pass', (expect) => {
    const expected = 36;
    const actual = multiplyBy12ThenHalve(6);
    expect.equal(actual, expected, 36);

    const expected2 = 144;
    const actual2 = multiplyBy12ThenHalve(4 * 6);
    expect.equal(actual2, expected2, 144);
});

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });
