// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: 2, action: Action.Subtract, expected: 8 },
  { a: 45, b: 40, action: Action.Subtract, expected: 5 },
  { a: 100, b: 50, action: Action.Subtract, expected: 50 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 10, b: 10, action: Action.Multiply, expected: 100 },
  { a: 9, b: 7, action: Action.Multiply, expected: 63 },
  { a: 51, b: 17, action: Action.Divide, expected: 3 },
  { a: 183, b: 3, action: Action.Divide, expected: 61 },
  { a: 329, b: 7, action: Action.Divide, expected: 47 },
  { a: 3, b: 5, action: Action.Exponentiate, expected: 243 },
  { a: 4, b: 7, action: Action.Exponentiate, expected: 16384 },
  { a: 9, b: 3, action: Action.Exponentiate, expected: 729 },
  { a: 3, b: 5, action: '#', expected: null },
  { a: 4, b: 7, action: '!', expected: null },
  { a: 9, b: 3, action: '**', expected: null },
  { a: 9, b: '5', action: Action.Add, expected: null }

];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests

  test.each(testCases)('test cases', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  });

  // Consider to use Jest table tests API to test all cases above
});
