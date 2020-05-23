import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./hoc/Movie";

const names = ["White Collar", "Sherlock Holmes"];

function App() {
  return (
    <div className="App">
      {names.map((name, index) => (
        <Movie name={`${name}`} />
      ))}
    </div>
  );
}

export default App;
