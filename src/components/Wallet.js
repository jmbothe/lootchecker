import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
  constructor(props) {
    super(props)

    this.state = { amount: undefined }
  }

  handleChange = e => this.setState({ amount: +e.target.value })
  handleDeposit = e => this.props.deposit(this.state.amount)
  handleWithdraw = e => this.props.withdraw(this.state.amount)

  render() { 
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <hr/>
        <input
          type="number"
          className="input-wallet"
          onChange={this.handleChange}
          value={this.state.amount}
        />
        <button className="btn-deposit" onClick={this.handleDeposit}>Deposit</button>
        <button className="btn-withdraw" onClick={this.handleWithdraw}>Withdraw</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ balance: state.balance })
const mapDispatchToProps = { deposit, withdraw };

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);