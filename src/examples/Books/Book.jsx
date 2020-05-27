// lib
import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";

// src
import withNotification from "../../hoc/withNotification";

const Movie = ({ name, showNotification }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {name}
      <IconButton onClick={() => showNotification(name)}>
        <Bookmark />
      </IconButton>
    </div>
  );
};

export default withNotification(Movie);
