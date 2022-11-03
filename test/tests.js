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

test('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = addExclamationPoints('bunny rabbit');
    expect.equal(actual, expected, 'bunny rabbit!!!');

    const expected2 = 'BUNNY!!!';
    const actual2 = addExclamationPoints('BUNNY');
    expect.equal(actual, expected, 'BUNNY!!!');
});

// skip('this test should pass', (expect) => {
//     const expected = 24;

//     const actual = multiplyBySeven(4);

//     expect.equal(actual, expected, 24);
// });

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
