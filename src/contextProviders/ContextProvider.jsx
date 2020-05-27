// lib
import React, { createContext } from "react";

// src
import { useNotification } from "../hooks/useNotification";
import { Notification } from "../Notification";

export const NotificationContext = createContext();

export const ContextProvider = ({ children }) => {
  const [{ isOpen, message }, showNotification] = useNotification();

  return (
    <NotificationContext.Provider value={{ isOpen, showNotification }}>
      <Notification message={message} />
      {children}
    </NotificationContext.Provider>
  );
};
