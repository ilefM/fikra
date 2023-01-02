import { Route, Routes } from "react-router-dom";
import Root from "./routes/root";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
