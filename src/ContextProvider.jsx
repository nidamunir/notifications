// lib
import React, { createContext } from "react";

// src
import { Notification } from "./Notification";

export const NotificationContext = createContext();

export const ContextProvider = ({ children }) => {
  let [modal, setModal] = React.useState(false);
  let [message, setMessage] = React.useState("");

  let showNotification = (message = "") => {
    setMessage(message);
    setModal(!modal);
  };

  let handleClose = () => {
    setModal(false);
  };

  return (
    <NotificationContext.Provider
      value={{ modal, showNotification, handleClose }}
    >
      <Notification message={message} />
      {children}
    </NotificationContext.Provider>
  );
};
