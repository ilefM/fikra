import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PostDetails from "../pages/PostDetails";
import MyProfile from "../pages/MyProfile";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/postDetails/:id" element={<PostDetails />} />
        <Route path="/me" element={<MyProfile />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
