import React from 'react';
import { shallow, mount } from 'enzyme';
import { Loot } from './Loot';

describe('<Loot />', () => {
  const loot = shallow(<Loot/>)

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  })

  describe('when mounted', () => {
    const mockFetchBitcoin = jest.fn();
    const props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin }
    const mountedLoot = mount(<Loot { ...props } />)

    it('dispatches `fetchBitcioin` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    })
  })
})