// Uncomment the code below and write your tests
import { simpleCalculator } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 4, action: '+' });
    expect(result).toBe(6);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 6, b: 4, action: '-' });
    expect(result).toBe(2);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 6, b: 4, action: '*' });
    expect(result).toBe(24);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 12, b: 2, action: '/' });
    expect(result).toBe(6);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 3, b: 4, action: '^' });
    expect(result).toBe(81);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 3, b: 4, action: '**' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({ a: null, b: null, action: '**' });
    expect(result).toBeNull();
  });
});
