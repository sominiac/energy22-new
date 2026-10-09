import { createContext } from "react";

import type { INotificationContextType } from "@/interfaces/Modal/provider.ts";

export const NotificationContext = createContext<INotificationContextType>({
  isNotificationSuccess: false,
  isNotificationOpen: false,
  copyNotificationText: "",
  setIsNotificationSuccess: () => {},
  setCopyNotificationText: () => {},
  onOpenNotification: () => {},
  onCloseNotification: () => {},
});
