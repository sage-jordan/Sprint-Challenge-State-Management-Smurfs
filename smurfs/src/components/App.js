import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf Family!</h1>
          <SmurfList />
      </div>
    );
  }
}

export default App;
