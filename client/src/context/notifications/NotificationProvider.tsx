import React, { useState, useRef, useEffect, createContext } from "react";
import { nanoid } from "nanoid";

export interface Notification {
  id: string;
  type: "success" | "error";
  message: string;
}

export interface INotificationContext {
  notifications: Notification[];
  addNotification: (
    notification: Omit<Notification, "id">,
    milliseconds?: number
  ) => void;
  dismissNotification: (id: string) => void;
}

export const NotificationContext = createContext<INotificationContext | null>(
  null
);

export function NotificationProvider(props: { children?: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const notificationTimeouts = useRef<
    { id: string; timeout: NodeJS.Timeout }[]
  >([]);

  useEffect(() => {
    return () =>
      notificationTimeouts.current.forEach((notificationTimeout) =>
        clearTimeout(notificationTimeout.timeout)
      );
  }, []);

  /**
   * Add a new notification.
   * @param notification Notification object
   * @param milliseconds Milliseconds to wait until auto-dismissing notification.
   */
  function addNotification(
    notification: Omit<Notification, "id">,
    milliseconds?: number
  ) {
    const id = nanoid();
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, ...notification },
    ]);
    if (milliseconds) {
      notificationTimeouts.current = [
        ...notificationTimeouts.current,
        {
          id,
          timeout: setTimeout(() => dismissNotification(id), milliseconds),
        },
      ];
    }
  }

  function dismissNotification(id: string) {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
    notificationTimeouts.current = notificationTimeouts.current.filter(
      (notificationTimeout) => {
        if (notificationTimeout.id === id) {
          clearTimeout(notificationTimeout.timeout);
          return false;
        } else return true;
      }
    );
  }

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, dismissNotification }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
}
