import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage";
import Signup from "../pages/Signup";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}

export default AppRoutes;
