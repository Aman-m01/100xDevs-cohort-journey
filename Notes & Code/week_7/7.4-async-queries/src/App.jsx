// Async Queries
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { notificationsState, totalNotificationSelector } from "./atoms";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <MainApp />
        </ErrorBoundary>
      </Suspense>
    </RecoilRoot>
  );
}

function MainApp() {
  const [notificationCounts, setNotificationCounts] = useRecoilState(notificationsState);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // here we add logic to refresh the state
  const refreshNotifications = async () => {
    try {
      const newNotifications = await fetchNotifications();
      setNotificationCounts(newNotifications);
    } catch (error) {
      console.error("Failed to refresh notifications:", error);
    }
  };

  return (
    <div>
      <button>Home</button>
      <button>
        My Network (
        {notificationCounts.network >= 100 ? "99+" : notificationCounts.network})
      </button>
      <button>Jobs {notificationCounts.jobs}</button>
      <button>Messaging ({notificationCounts.messaging})</button>
      <button>Notifications ({notificationCounts.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
      <button onClick={refreshNotifications}>Refresh Notifications</button>
    </div>
  );
}

function Loading() {
  return <div>Loading...</div>;
}

function ErrorBoundary({ children }) {
  try {
    return children;
  } catch (error) {
    console.error("An error occurred:", error);
    return <div>Something went wrong. Please try again later.</div>;
  }
}

export default App;
