import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import PostDetails from "../pages/PostDetails";
import MyProfile from "../pages/MyProfile";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import LoggedInGuard from "../guards/LoggedInGuard";
import AuthGuard from "../guards/AuthGuard";
import About from "../pages/About";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/postDetails/:id" element={<PostDetails />} />
        <Route
          path="/me"
          element={
            <AuthGuard>
              <MyProfile />
            </AuthGuard>
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
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
