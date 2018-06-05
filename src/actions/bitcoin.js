import { FETCH_BITCOIN } from './constants';

export const fetchBitcoin = () => {
  return dispatch => {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(body => dispatch({ type: FETCH_BITCOIN, bitcoin: body }));
  }
}