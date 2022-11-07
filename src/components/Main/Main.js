import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import "./main.css";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
