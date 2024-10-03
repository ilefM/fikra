import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import PostDetails from "../pages/PostDetails";
import MyProfile from "../pages/MyProfile";
import SignIn from "../pages/SignIn";
import RequireAuth from "../guards/AuthGuard";
import Register from "../pages/Register";
import LoggedInGuard from "../guards/LoggedInGuard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/postDetails/:id" element={<PostDetails />} />
        <Route
          path="/me"
          element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/signin"
          element={
            <LoggedInGuard>
              <SignIn />
            </LoggedInGuard>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
