import React, { Component } from "react";
import axios from "axios";

class DropDownMenu extends Component {
  state = {
    listCurrencyNations: []
  };

  getListCurrencyNations = async () => {
    try {
      let response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.coindesk.com/v1/bpi/supported-currencies.json"
      );
      let data = response.data;
      this.setState({
        listCurrencyNations: data
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getListCurrencyNations();
  }

  render() {
    const listOfNations = this.state.listCurrencyNations.map(
      (nation, index) => {
        return (
          <option key={index} value={nation.currency}>
            {nation.country}
          </option>
        );
      }
    );
    return (
      <div>
        <select
          style={styling}
          value={this.props.value}
          onChange={this.props.handleChange}
        >
          {listOfNations}
        </select>
      </div>
    );
  }
}

const styling = {
  width: "100px",
  marginLeft: "25px",
  marginBottom: "20px"
};

export default DropDownMenu;
