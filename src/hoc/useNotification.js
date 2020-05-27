import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";

export default function useNotification(message) {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [name, setName] = useState("");

  //   const showNotification = (name) => {
  //     setName(name);
  //     setIsNotificationVisible(true);
  //   //   };
  //   useEffect(() => {
  //     showNotification();
  //     console.log("name received", name);
  //     setIsNotificationVisible(true);
  //     // setName(props);
  //     return () => {
  //       setIsNotificationVisible(false);
  //     };
  //   });
  //   const hideNotification = () => {
  //     setIsNotificationVisible(false);
  //   };

  const showNotification = (props) => {
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={true}
          autoHideDuration={3000}
          message={props}
          key={props}
        />
      </div>
    );
  };

  //   function showNotification(props) {
  //     return (
  //       <div>
  //         <Snackbar
  //           anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
  //           open={true}
  //           autoHideDuration={3000}
  //           message={props}
  //           key={props}
  //         />
  //       </div>
  //     );
  //   }
  return [showNotification(), showNotification];
}
