import React, { Component } from 'react';
import axios from 'axios';

export default class Price extends Component {
  constructor(props){
      super(props);
      this.state = {
          currency: 'USD',
          price: '' 
      }
  }

  componentDidMount() {
      this.getBitcoinPrice()
  }

  getBitcoinPrice(){
      axios.get('https://api.coindesk.com/v1/bpi/currentprice/'+this.state.currency+'.json')
           .then((response) => {
               this.setState({ price: response.data.bpi.USD.rate})
           })
           .catch((err) => {
               console.log(err);
           })
  }
  render() {
    return (
      <div style={{color: 'green'}}>
        $ {this.state.price}
      </div>
    )
  }
}
