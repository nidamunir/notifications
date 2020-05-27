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
      <NotificationProvider>
        {names.map((name, index) => (
          <Movie name={`${name}`} />
        ))}
        <Component />
        <Component />
      </NotificationProvider>
    </div>
  );
}

export default App;
