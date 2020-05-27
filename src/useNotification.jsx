import React from "react";

export const useNotification = () => {
  let [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  let showNotification = (message) => {
    setMessage(message);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return [{ isOpen, message }, showNotification];
};
