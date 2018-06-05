import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balance reducer', () => {
  describe('when initializing the app', () => {
    const balance = 10;

    it('sets balance', () => {
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
        .toEqual(balance)
    })

    describe('and when re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      })
    })
  })

  it('deposits money', () => {
    const balance = 0;
    const deposit = 10;

    expect(balanceReducer(balance, { type: constants.DEPOSIT, deposit }))
      .toEqual(balance + deposit)
  })

  it('withdraws money', () => {
    const balance = 20;
    const withdrawal = 10;

    expect(balanceReducer(balance, { type: constants.WITHDRAW, withdrawal }))
      .toEqual(balance - withdrawal);
  })
})