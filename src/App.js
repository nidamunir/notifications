// lib
import React from "react";

// src
import "./App.css";

import { ContextProvider as NotificationProvider } from "./ContextProvider";
import Books from "./examples/Books/Books";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <Books />
        <span>*_**_**_**_ Created By Nida Munir _**_**_**_*</span>
      </NotificationProvider>
    </div>
  );
}

export default App;
