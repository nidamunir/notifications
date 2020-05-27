// lib
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

// src
import { useNotificationContext } from "../../contextProviders/useNotificationContext";

// styles
import "./Books.css";

export const ReadingList = ({ name, onRemove }) => {
  const { showNotification } = useNotificationContext();

  return (
    <>
      <div className="listItem">
        <p>{name}</p>
        <IconButton
          onClick={() => {
            onRemove(name);
            showNotification(`${name} removed from reading list.`);
          }}
        >
          <ClearIcon />
        </IconButton>
      </div>
    </>
  );
};
