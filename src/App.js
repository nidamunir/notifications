// lib
import React from "react";

// src
import { ContextProvider as NotificationProvider } from "./contextProviders/ContextProvider";
import Books from "./examples/Books/Books";
import "./App.css";

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
