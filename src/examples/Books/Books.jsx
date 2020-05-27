// lib
import React, { useReducer } from "react";

// src
import Book from "./Book";
import reducer, {
  ADD_TO_READING_LIST,
  REMOVE_FROM_READING_LIST,
} from "../reducer";
import Component from "./Component";

// styles
import "./Books.css";

const initialState = {
  books: [
    "A thousand Splendid Suns",
    "The Kite Runner",
    "Enjoy your life",
    "Complex PTSD - From Surviving to thriving!",
    "Soft Skills",
    "Redux in Action",
    "The Clean Coder",
  ],
  readingList: [],
};

const Books = () => {
  const [{ books, readingList }, dispatch] = useReducer(reducer, initialState);

  const handleAdd = (name) => {
    dispatch({ type: ADD_TO_READING_LIST, payload: name });
  };

  const handleRemove = (name) => {
    dispatch({ type: REMOVE_FROM_READING_LIST, payload: name });
  };

  return (
    <div className="books">
      {/* Books */}
      <div className="list">
        <h2>Demo using withNotification HOC</h2>
        {books.map((name, index) => (
          <Book name={name} onAddToReadingList={handleAdd} />
        ))}
      </div>

      {/* Reading List */}
      <div className="list">
        <h2>Demo using Context APi</h2>
        {readingList.map((name, index) => (
          <Component name={name} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default Books;
