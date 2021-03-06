// lib
import React, { useReducer } from "react";

// src
import { Book } from "./Book";
import { ReadingList } from "./ReadingList";
import reducer, {
  ADD_TO_READING_LIST,
  REMOVE_FROM_READING_LIST,
} from "../reducer";

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
        <h3>Demo using withNotification HOC</h3>
        <h5>Books </h5>
        {books.map((name) => (
          <Book name={name} onAddToReadingList={handleAdd} />
        ))}
      </div>

      {/* Reading List */}
      <div className="list">
        <h3>Demo using Context APi</h3>
        <h5>Reading List</h5>
        {readingList.length ? (
          readingList.map((name) => (
            <ReadingList name={name} onRemove={handleRemove} />
          ))
        ) : (
          <>
            <span>Your reading list is empty.</span>
            <span>
              Please click save icon to add a book to your reading list.
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Books;
