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

test('this test should pass', (expect) => {
    const expected = 21;
    const actual = multiplyBySeven(3);
    expect.equal(actual, expected, 21);
});

// skip('this test should pass', (expect) => {
//     const expected =

//     const actual = multiplyBy12ThenHalve();

//     expect.equal(actual, expected, );
// });

// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });
