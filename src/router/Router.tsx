import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import PostDetails from "../pages/PostDetails";
import MyProfile from "../pages/MyProfile";
import SignIn from "../pages/SignIn";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/postDetails/:id" element={<PostDetails />} />
        <Route path="/me" element={<MyProfile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
