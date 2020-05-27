// lib
import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";

export default function withNotification(Component) {
  return (props) => {
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [message, setMessage] = useState("");

    const showNotification = (name) => {
      setMessage(name);
      setIsNotificationVisible(true);
    };

    const hideNotification = () => {
      setIsNotificationVisible(false);
    };

    return (
      <div>
        <Component
          isNotificationVisible={isNotificationVisible}
          showNotification={showNotification}
          {...props}
        />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={isNotificationVisible}
          autoHideDuration={3000}
          message={message}
          key={message}
          onClose={hideNotification}
        />
      </div>
    );
  };
}
