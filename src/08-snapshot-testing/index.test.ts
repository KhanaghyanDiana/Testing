// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const expectedLinkedList= {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: null,
            next: null,
          },
        },
      },
    };
    const generatedLinkedList = generateLinkedList([1, 2, 3]);
    expect(generatedLinkedList).toStrictEqual(expectedLinkedList);
  });

  test('should generate linked list from values 2', () => {
    const input = ['a', 'b', 'c'];
    const result = generateLinkedList(input);
    expect(result).toMatchSnapshot();
  });
});
