// lib
import React from "react";
import ReactDOM from "react-dom";
import Snackbar from "@material-ui/core/Snackbar";

// src
import { useNotificationContext } from "./useNotificationContext";

export const Notification = ({ message }) => {
  let { modal, handleClose } = useNotificationContext();

  return ReactDOM.createPortal(
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={modal}
      autoHideDuration={3000}
      message={message}
      onClose={handleClose}
    />,
    document.body
  );
};
