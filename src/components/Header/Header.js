import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <p className="name">
        eric hafvenstein{/* click to change theme color feature */}
      </p>
      <nav>
        <NavLink to="home">home</NavLink>
        <NavLink to="projects">projects</NavLink>
        <NavLink to="about">about</NavLink>
        <NavLink to="contact">contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
