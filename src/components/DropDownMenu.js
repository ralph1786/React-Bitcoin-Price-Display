import React, { Component } from "react";

class DropDownMenu extends Component {
  render() {
    return (
      <div>
        <select
          style={styling}
          value={this.props.value}
          onChange={this.props.handleChange}
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="CNY">CNY</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
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
