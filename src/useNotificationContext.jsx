// lib
import { useContext } from "react";

// src
import { NotificationContext } from "./ContextProvider";

export const useNotificationContext = () => useContext(NotificationContext);
