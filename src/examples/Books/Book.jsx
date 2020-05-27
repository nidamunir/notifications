// lib
import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";

// src
import withNotification from "../../hoc/withNotification";

// styles
import "./Books.css";

const BookInner = ({ name, showNotification, onAddToReadingList }) => {
  return (
    <div className="listItem">
      <p>{name}</p>
      <IconButton
        onClick={() => {
          onAddToReadingList(name);
          showNotification(`${name} is added to reading list.`);
        }}
      >
        <Bookmark />
      </IconButton>
    </div>
  );
};

export const Book = withNotification(BookInner);
