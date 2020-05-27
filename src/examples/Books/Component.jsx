// lib
import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

// src
import { useNotification } from "../../useNotification";

const Component = ({ name, onRemove }) => {
  let { showNotification } = useNotification();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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

export default Component;
