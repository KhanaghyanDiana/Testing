// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError } from '.';
import { random } from 'lodash';
jest.mock('lodash', () => ({
  random: jest.fn(),
}));
describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const res = getBankAccount(9);
    expect(res.getBalance()).toBe(9);
  });
  // `Insufficient funds: cannot withdraw more than ${balance}`
  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const res = getBankAccount(9);
    expect(() => res.withdraw(10000)).toThrow(
      `Insufficient funds: cannot withdraw more than ${9}`,
    );
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const account = getBankAccount(100); // Initial balance of 100
    expect(() => account.transfer(50, account)).toThrow('Transfer failed');
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const senderInitialBalance = 250;
    const receiverInitialBalance = 230;
    const transferAmount = 300;

    const senderAccount = getBankAccount(senderInitialBalance);
    const receiverAccount = getBankAccount(receiverInitialBalance);

    expect(() =>
      senderAccount.transfer(transferAmount, receiverAccount),
    ).toThrow(InsufficientFundsError);
  });

  test('should deposit money', () => {
    // Write your test here
    const deposit = getBankAccount(100000000);
    expect(deposit.deposit(2000)).toEqual({ _balance: 100002000 });
  });

  test('should withdraw money', () => {
    // Write your test here
    const deposit = getBankAccount(100000000);
    expect(deposit.withdraw(2000)).toEqual({ _balance: 99998000 });
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    (random as jest.Mock).mockReturnValueOnce(84);
    const result = await getBankAccount(1000).fetchBalance();
    expect(result).toBe(84);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    (random as jest.Mock).mockReturnValueOnce(84);
    const result = await getBankAccount(1000).fetchBalance();
    if (typeof result === 'number') {
      console.log('i a');
      expect(() => getBankAccount(1000).synchronizeBalance()).toBe(1000);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    (random as jest.Mock).mockReturnValueOnce(null);
    const result = await getBankAccount(1000).fetchBalance();
    console.log(result, 'result');
    if (result === null) {
      expect(() => getBankAccount(1000).synchronizeBalance()).toThrow(
        'Synchronization failed',
      );
    }
  });
});
