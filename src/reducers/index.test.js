import rootReducer from './index';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(rootReducer(undefined, {})).toEqual({ balance: 0, bitcoin: {} })
  })
})