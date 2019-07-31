import React, { Component } from "react";
import "./Display.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Price from "../components/Price";
import NewsList from "../components/NewsList";
import bitcoinImage from "../assets/goldenbitcoin.jpg";
import DropDownMenu from "../components/DropDownMenu";

class displayBitcoinCard extends Component {
  state = {
    currency: "USD"
  };

  handleChange = e => {
    this.setState({
      currency: e.target.value
    });
  };

  render() {
    return (
      <Card>
        <CardHeader title="Bitcoin Price" subtitle={this.state.currency} />
        <DropDownMenu
          value={this.state.currency}
          handleChange={this.handleChange}
        />
        <CardMedia>
          <img src={bitcoinImage} alt="" />
        </CardMedia>
        <CardTitle title={<Price currency={this.state.currency} />} />
        <CardText>
          <h2>Latest Bitcoin News</h2>
          <NewsList />
        </CardText>
        <CardActions />
      </Card>
    );
  }
}

export default displayBitcoinCard;
