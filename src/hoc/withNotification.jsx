import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Tooltip } from "@material-ui/core";

export default function withNotification(Component) {
  return (props) => {
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [name, setName] = useState("");

    const showNotification = (name) => {
      setName(name);
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
          message={`${name} added to watch list.`}
          key={name}
          onClose={hideNotification}
        />
      </div>
    );
  };
}
