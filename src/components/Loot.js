import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }
  render() { 
    return (
      <div></div>
    )
  }
}
 
const mapStateToProps = state => state;
const mapDispatchToProps = { fetchBitcoin };

export default connect(mapStateToProps, mapDispatchToProps)(Loot);