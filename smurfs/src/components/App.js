import React from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import Form from './Form';

function App () {

  return (
    <div className="App">
      <h1>Smurf Family!</h1>
        <SmurfList />
        <Form />
    </div>
  );
}

export default App;
