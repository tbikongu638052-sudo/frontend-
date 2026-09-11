import React, { createContext, useContext, useState, useCallback } from 'react';

export const NotificationContext = createContext({
  notifications: [],
  notify: () => {},
  removeNotification: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = useCallback((message, type = 'info', duration = 3500) => {
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    setNotifications(prev => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, duration);
    }
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, notify, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
