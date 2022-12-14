import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import posPizzaTn from "../../assets/projectThumbnails/pos-pizza_thumbnail.jpg";
import yahtzeeTn from "../../assets/projectThumbnails/Yahtzee_thumbnail.jpg";
import prenticeStreetBarbersTn from "../../assets/projectThumbnails/prentice-street-barbers_thumbnail.jpg";
import weatherAppTn from "../../assets/projectThumbnails/weather-app_thumbnail.jpg";

const images = { posPizzaTn, yahtzeeTn, prenticeStreetBarbersTn, weatherAppTn };

const Main = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects images={images} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Main;
