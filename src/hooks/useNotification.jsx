// lib
import React from "react";

export const useNotification = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const showNotification = (message) => {
    setMessage(message);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return [{ isOpen, message }, showNotification];
};
