import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BitcoinCard from "./components/display";

import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className='container'>
          <BitcoinCard />
        </div>  
      </MuiThemeProvider>
      
    );
  }
}

export default App;
