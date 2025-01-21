import { atom, selector } from "recoil";
import axios from "axios";

// functions to fetch notifications
const fetchNotifications = async () => {
  const res = await axios.get("https://sum-server.100xdevs.com/notifications");
  return res.data || {
    network: 0,
    jobs: 0,
    messaging: 0,
    notifications: 0,
  };
};

// Atom for notification state ....
export const notificationsState = atom({
  key: "notificationsState",
  default: selector({
    key: "notificationsDefaultSelector",
    get: async () => {
      try {
        return await fetchNotifications();
      } catch (error) {
        console.error("Error fetching notifications:", error);
        return {
          network: 0,
          jobs: 0,
          messaging: 0,
          notifications: 0,
        }; // Fallback to default values
      }
    },
  }),
});

// here we calculate the total notifications
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const counts = get(notificationsState);
    return (
      (counts.network || 0) +
      (counts.jobs || 0) +
      (counts.messaging || 0) +
      (counts.notifications || 0)
    );
  },
});
