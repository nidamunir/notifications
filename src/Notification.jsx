// lib
import React from "react";
import ReactDOM from "react-dom";
import Snackbar from "@material-ui/core/Snackbar";

// src
import { useNotificationContext } from "./useNotificationContext";

export const Notification = ({ message }) => {
  let { isOpen } = useNotificationContext();
  console.log("is open", isOpen);
  return ReactDOM.createPortal(
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isOpen}
      message={message}
    />,
    document.body
  );
};
