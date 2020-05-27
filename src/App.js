// lib
import React from "react";

// src
import Component from "./examples/Books/Component";
import "./App.css";

import { ContextProvider as NotificationProvider } from "./ContextProvider";
import Books from "./examples/Books/Books";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <Books />

        {/* <Component />
        <Component /> */}
        <h5>*****************</h5>
      </NotificationProvider>
    </div>
  );
}

export default App;
