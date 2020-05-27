// lib
import React from "react";

// src
import Component from "./Component";
import "./App.css";

import { ContextProvider as NotificationProvider } from "./ContextProvider";
import Books from "./examples/Books/Books";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <h2>Demo using withNotification HOC</h2>
        <Books />
        <h5>*****************</h5>
        <Component />
        <Component />
      </NotificationProvider>
    </div>
  );
}

export default App;
