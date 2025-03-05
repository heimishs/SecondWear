import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import DetailSearch from "./pages/DetailSearch";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Search" element={<DetailSearch />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
