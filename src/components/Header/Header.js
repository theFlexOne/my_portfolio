import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as GitHubLink } from "../../assets/github.svg";
import { ReactComponent as LinkedInLink } from "../../assets/linkedin.svg";
import "./header.css";

const Header = () => {
  const { pathname } = useLocation();

  const setActiveLinkColor = (path) =>
    `/${path}` === pathname ? "text-primary-300" : "";

  return (
    <div className="py-4 px-8 text-white flex align-center tracking-widest">
      <p className="text-primary-300 text-2xl mr-12">eric hafvenstein</p>
      <div className="flex gap-5">
        <a href="https://github.com/theFlexOne">
          <GitHubLink height="25" width="25" />
        </a>
        <a href="https://www.linkedin.com/in/eric-hafvenstein/">
          <LinkedInLink height="25" width="25" />
        </a>
      </div>
      <nav className="flex gap-5 items-end ml-auto">
        <NavLink className={`${setActiveLinkColor("home")}`} to="home">
          home
        </NavLink>
        <NavLink className={setActiveLinkColor("projects")} to="projects">
          projects
        </NavLink>
        <NavLink className={setActiveLinkColor("about")} to="about">
          about
        </NavLink>
        <NavLink className={setActiveLinkColor("contact")} to="contact">
          contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
