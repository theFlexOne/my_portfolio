import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import "./main.css";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import posPizzaTn from "../../assets/pos-pizza_thumbnail.jpg";
import yahtzeeTn from "../../assets/Yahtzee_thumbnail.jpg";
import prenticeStreetBarbersTn from "../../assets/prentice-street-barbers_thumbnail.jpg";
import weatherAppTn from "../../assets/weather-app_thumbnail.jpg";
import LinkBadges from "../LinkBadges/LinkBadges";

const images = { posPizzaTn, yahtzeeTn, prenticeStreetBarbersTn, weatherAppTn };
console.log("images", images);

const Main = () => {
  return (
    <main>
      <LinkBadges />
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects images={images} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
