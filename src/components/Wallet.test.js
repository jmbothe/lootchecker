import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('<Wallet />', () => {
  const deposit = jest.fn();
  const withdraw = jest.fn();
  const props = { balance: 20, deposit, withdraw };
  const wallet = shallow(<Wallet {...props} />)

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  })

  it('displays balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
  })

  it('contains an input for defining deposit or withdrawal amount', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true)
  })

  describe('when user types in input field', () => {
    const userInput = '25';

    beforeEach(() => {
      wallet.find('.input-wallet')
        .simulate('change', { target: { value: userInput }})
    })

    it('updates local wallet balance in `state` and converts to int', () => {
      expect(wallet.state().amount).toEqual(+userInput);
    })

    describe('and wants to deposit money', () => {
      beforeEach(() => wallet.find('.btn-deposit').simulate('click'))

      it('dispatches the `deposit()` with the local balance', () => {
        expect(deposit).toHaveBeenCalledWith(+userInput)
      })
    })

    describe('and wants to withdraw money', () => {
      beforeEach(() => wallet.find('.btn-withdraw').simulate('click'))

      it('dispatches the `withdraw()` with the local balance', () => {
        expect(withdraw).toHaveBeenCalledWith(+userInput)
      })
    })

  })
})