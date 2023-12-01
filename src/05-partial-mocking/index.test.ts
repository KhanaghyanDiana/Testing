// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unMockedFunction } from './index';

jest.mock('./index', () => ({
  ...jest.requireActual('./index'),
  mockOne: jest.fn(),
  mockTwo: jest.fn(),
  mockThree: jest.fn(),
}));

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
    const consoleSpy = jest.spyOn(console, 'log');
    mockOne();
    mockTwo();
    mockThree();
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test('unMockedFunction should log into console', () => {
    // Write your test here
    const consoleStatement = jest.spyOn(console, 'log');
    unMockedFunction();
    expect(consoleStatement).toBeCalledWith('I am not mocked');
  });
});
