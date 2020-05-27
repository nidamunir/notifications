// lib
import React from "react";
import Save from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
// save
import withNotification from "./withNotification";

const Movie = ({ name, showNotification }) => {
  return (
    <div>
      {name}
      <IconButton onClick={() => showNotification(name)}>
        <Save />
      </IconButton>
    </div>
  );
};

export default withNotification(Movie);
