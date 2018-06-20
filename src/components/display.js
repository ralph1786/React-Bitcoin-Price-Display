import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Price from './price';

const BitcoinCard = () => (
    <Card>
        <CardHeader 
            title="Bitcoin Price"
            subtitle='US Dollars'
        />
        <CardMedia
            // overlay={<CardTitle title="Bitcoin" />}
        >
        <img src="goldenbitcoin.jpg" alt="" />
        </CardMedia>
        <CardTitle  title={<Price />} subtitle="Latest News:" />
        <CardText>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li><br />
            <li>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi...</li>
        </CardText>
        <CardActions>
            <RaisedButton label="More" primary={true} />
        </CardActions>
    </Card>
);

export default BitcoinCard;

