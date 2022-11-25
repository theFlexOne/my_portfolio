import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const setActiveLinkColor = (path) =>
    `/${path}` === pathname ? "text-primary-300" : "";

  return (
    <div className="py-4 px-8 text-white flex align-center tracking-widest">
      <span className="flex items-end mr-auto">
        <p className="mr-auto text-primary-300 cursor-pointer text-2xl">
          eric hafvenstein
        </p>
      </span>
      <nav className="flex gap-5 items-end">
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
