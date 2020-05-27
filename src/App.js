// lib
import React from "react";

// src
import Movie from "./hoc/Movie";
import Component from "./Component";
import "./App.css";

import { ContextProvider as NotificationProvider } from "./ContextProvider";

const names = ["White Collar", "Sherlock Holmes"];

function App() {
  return (
    <div className="App">
      {names.map((name, index) => (
        <Movie name={`${name}`} />
      ))}
      <NotificationProvider>
        <Component />
        <Component />
      </NotificationProvider>
    </div>
  );
}

export default App;
