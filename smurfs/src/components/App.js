import React, { Component, useState } from "react";
import "./App.css";
import SmurfList from "./SmurfList";

function App () {
  const [isEditing, setIsEditing ] = useState(false);

  const toggleIsEditing = e => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <div className="App">
      <h1>Smurf Family!</h1>
        <SmurfList />
        {!isEditing ? (
          <button onClick={toggleIsEditing}>Add Smurf</button>
        ) : (
          <div>
            <input 
            
            />
          </div>
        )}
    </div>
  );
}

export default App;
