import AuthProvider from "./contexts/auth/AuthProvider";
import Router from "./router/Router";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
