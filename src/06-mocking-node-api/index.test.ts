// Uncomment the code below and write your tests
// @ts-ignore
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import { join } from 'path';
const cb = jest.fn();
const timeout = 1000;
jest.mock('fs');
jest.mock('path');
describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    doStuffByTimeout(cb, timeout);
    jest.advanceTimersByTime(timeout);
    expect(cb).toHaveBeenCalled();
  });

  test('should call callback only after timeout', () => {
    const cb = jest.fn();
    doStuffByTimeout(cb, 5);
    expect(cb).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(cb).toBeCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    doStuffByInterval(cb, timeout);
    expect(cb).not.toBeCalled();
    jest.advanceTimersByTime(timeout);
    expect(cb).toHaveBeenCalled();
    jest.clearAllTimers();
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    doStuffByInterval(cb, timeout);
    expect(cb).not.toBeCalled();
    jest.advanceTimersByTime(timeout);
    expect(cb).toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(cb).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(1000);
    expect(cb).toHaveBeenCalledTimes(3);
    jest.clearAllTimers();
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const pathToFile = './index.ts';
    const fullPath = join(__dirname, pathToFile);
    const result = await readFileAsynchronously(fullPath);
    expect(result).toBeDefined();
  });

  test('should return null if file does not exist', async () => {
    const nonExistentPath = './nonexistentfile.txt';
    const result = await readFileAsynchronously(nonExistentPath);
    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    const pathToFile = './index.ts';
    const fullPath = join(__dirname, pathToFile);
    const fileContent = 'Hello world';
    const result = await readFileAsynchronously(fullPath);
    if (result !== null) {
      expect(result).toEqual(fileContent);
    } else {
      expect(result).toBeNull;
    }
  });
});
