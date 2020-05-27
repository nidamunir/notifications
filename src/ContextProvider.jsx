// lib
import React, { createContext } from "react";

// src
import { Notification } from "./Notification";
import { useNotification } from "./useNotification";

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
