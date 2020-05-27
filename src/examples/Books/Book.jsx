// lib
import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

// src
import withNotification from "../../hoc/withNotification";

const Movie = ({ name, showNotification, onAddToReadingList }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {name}
      <IconButton
        onClick={() => {
          onAddToReadingList(name);
          showNotification(name);
        }}
      >
        {/* <Icon>star</Icon>; */}
        <Bookmark />
      </IconButton>
    </div>
  );
};

export default withNotification(Movie);
