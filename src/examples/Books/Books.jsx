// lib
import React from "react";

// src
import Book from "./Book";

const Books = () => {
  const books = [
    "A thousand Splendid Suns",
    "The Kite Runner",
    "Enjoy your life",
    "Complex PTSD - From Surviving to thriving!",
    "Soft Skills",
    "Redux in Action",
    "The Clean Coder",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {books.map((name, index) => (
        <Book name={name} />
      ))}
    </div>
  );
};

export default Books;
