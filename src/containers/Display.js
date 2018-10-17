import React from "react";
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
import News from "../components/News";
import bitcoinImage from "../assets/goldenbitcoin.jpg";

const displayBitcoinCard = () => (
  <Card>
    <CardHeader title="Bitcoin Price" subtitle="US Dollars" />
    <CardMedia>
      <img src={bitcoinImage} alt="" />
    </CardMedia>
    <CardTitle title={<Price />} />
    <CardText>
      <h2>Latest Bitcoin News</h2>
      <News />
    </CardText>
    <CardActions />
  </Card>
);

export default displayBitcoinCard;
