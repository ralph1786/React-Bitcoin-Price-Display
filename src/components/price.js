import React, { Fragment, Component } from "react";
import axios from "axios";

class Price extends Component {
  state = {
    currency: this.props.currency,
    price: "",
    currencyName: ""
  };

  componentDidMount() {
    this.getBitcoinPrice();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.currency !== nextProps.currency) {
      return {
        currency: nextProps.currency
      };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency) {
      this.getBitcoinPrice();
    }
  }

  getBitcoinPrice = () => {
    axios
      .get(
        "https://api.coindesk.com/v1/bpi/currentprice/" +
          this.state.currency +
          ".json"
      )
      .then(res => {
        const { rate, description } = res.data.bpi[this.state.currency];
        this.setState({ price: rate, currencyName: description });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { price, currencyName } = this.state;
    return (
      <Fragment>
        <div style={{ display: "inline-block" }}>
          Price: <span style={{ color: "#1fd907" }}>{price}</span>
        </div>
        <span style={{ marginLeft: "20px" }}>{currencyName}</span>
      </Fragment>
    );
  }
}

export default Price;
