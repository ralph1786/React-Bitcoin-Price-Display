import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DisplayBitcoinCard from "./containers/Display";

import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <DisplayBitcoinCard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
