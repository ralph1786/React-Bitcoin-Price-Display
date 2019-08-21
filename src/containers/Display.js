import React, { useState } from "react";
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

const DisplayBitcoinCard = () => {
  const [currency, setCurrency] = useState("USD");

  const handleChange = e => {
    setCurrency(e.target.value);
  };
  return (
    <Card>
      <CardHeader title="Bitcoin Price" subtitle={currency} />
      <DropDownMenu value={currency} handleChange={handleChange} />
      <CardMedia>
        <img src={bitcoinImage} alt="" />
      </CardMedia>
      <CardTitle title={<Price currency={currency} />} />
      <CardText>
        <h2>Latest Bitcoin News</h2>
        <NewsList />
      </CardText>
      <CardActions />
    </Card>
  );
};

export default DisplayBitcoinCard;
