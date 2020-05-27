// lib
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

// src
import { useNotificationContext } from "../../useNotificationContext";

// styles
import "./Books.css";

export const ReadingList = ({ name, onRemove }) => {
  let { showNotification } = useNotificationContext();

  return (
    <>
      <div className="listItem">
        <p>{name}</p>
        <IconButton
          onClick={() => {
            onRemove(name);
            showNotification(`${name} removed from watch list.`);
          }}
        >
          <ClearIcon />
        </IconButton>
      </div>
    </>
  );
};
