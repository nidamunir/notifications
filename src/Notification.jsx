// lib
import React from "react";
import ReactDOM from "react-dom";
import Snackbar from "@material-ui/core/Snackbar";

// src
import { useNotificationContext } from "./contextProviders/useNotificationContext";

export const Notification = ({ message }) => {
  const { isOpen } = useNotificationContext();

  return ReactDOM.createPortal(
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isOpen}
      message={message}
    />,
    document.body
  );
};
