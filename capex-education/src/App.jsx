import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./components/Front";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import CourseHero from "./components/CourseHero";
import Webinar from "./components/Webinar";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Front />} />
        {/* Future routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CourseHero />} />
        <Route path="/webinar" element={<Webinar />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
