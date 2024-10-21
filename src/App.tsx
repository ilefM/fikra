import LoadingModal from "./components/LoadingModal";
import AuthProvider from "./contexts/auth/AuthProvider";
import LoadingProvider from "./contexts/loadingContext/LoadingProvider";
import Router from "./router/Router";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function App() {
  return (
    <>
      <ReactNotifications />
      <AuthProvider>
        <LoadingProvider>
          <Router />
          <LoadingModal />
        </LoadingProvider>
      </AuthProvider>
    </>
  );
}
