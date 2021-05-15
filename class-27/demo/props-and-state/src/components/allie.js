import React from 'react';

class Allie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };

    this.withdrawMoney2 = this.withdrawMoney.bind(this)
  }

  // Auto-Binding
  handleChange = (e) => {
    let amount = parseInt(e.target.value);
    this.setState({amount});
  }

  withdrawMoney = (e) => {
    e.preventDefault();
    this.props.useAtmCard(this.state.amount);
  }

  withdrawMoney2() {
    this.props.useAtmCard(25);
  }

  render() {
    return (
      <div>
        Thanks for the {this.props.food}
        <form onSubmit={this.withdrawMoney}>
          <input name="amount" placeholder="0.00" onChange={this.handleChange} />
          <label>
            <input type="radio" value="10" name="amt" onChange={this.handleChange} />
            <span>10</span>
          </label>

          <label>
            <input type="radio" value="20" name="amt" onChange={this.handleChange} />
            <span>20</span>
          </label>

          <label>
            <input type="radio" value="30" name="amt" onChange={this.handleChange} />
          <span>30</span>
          </label>
        <button>Take Money From Dad</button>
        {/* <button onClick={this.withdrawMoney2}>Take Money From Mom</button> */}
        </form>
      </div>
    )
  }

}

export default Allie;
