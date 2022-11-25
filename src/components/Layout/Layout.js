import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import {} from "../../themeColors";
import { ReactComponent as PrevArrow } from "../../assets/arrow prev.svg";
import { ReactComponent as NextArrow } from "../../assets/arrow next.svg";
import LinkBadges from "../LinkBadges/LinkBadges";

const pagePaths = ["home", "projects", "about", "contact"];

const SideNavButton = ({ children, onClick, ...other }) => {
  return (
    <div className="px-2 items-center flex" {...other}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

const PreviousButton = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname.slice(1);

  const [hovered, setHovered] = useState(false);

  const handlePrevPageClick = () => {
    const curIdx = pagePaths.indexOf(path);
    const lastIdx = pagePaths.length - 1;
    const prevIdx = curIdx === 0 ? lastIdx : curIdx - 1;
    navigate(pagePaths[prevIdx]);
  };

  return (
    <SideNavButton
      onClick={handlePrevPageClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PrevArrow className="arrow" fillOpacity={hovered ? 0.3 : 0.1} />
    </SideNavButton>
  );
};
const NextButton = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname.slice(1);

  const [hovered, setHovered] = useState(false);

  const handleNextPageClick = () => {
    const curIdx = pagePaths.indexOf(path);
    const lastIdx = pagePaths.length - 1;
    const nextIdx = curIdx === lastIdx ? 0 : curIdx + 1;
    navigate(pagePaths[nextIdx]);
  };

  return (
    <SideNavButton
      onClick={handleNextPageClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <NextArrow className="arrow" fillOpacity={hovered ? 0.3 : 0.1} />
    </SideNavButton>
  );
};

const Layout = ({ children }) => {
  // const path = useLocation().pathname.slice(1);
  // const navigate = useNavigate();
  // const [themeClrIdx, setThemeClrIdx] = useState(0);

  // const handleNextPageClick = () => {
  //   const curIdx = pagePaths.indexOf(path);
  //   const lastIdx = pagePaths.length - 1;
  //   const nextIdx = curIdx === lastIdx ? 0 : curIdx + 1;
  //   navigate(pagePaths[nextIdx]);
  // };

  // const handlePrevPageClick = () => {
  //   const curIdx = pagePaths.indexOf(path);
  //   const lastIdx = pagePaths.length - 1;
  //   const prevIdx = curIdx === 0 ? lastIdx : curIdx - 1;
  //   navigate(pagePaths[prevIdx]);
  // };

  return (
    <>
      <LinkBadges />
      <div className="h-full flex flex-col">
        <Header />
        <div className="flex flex-1">
          <PreviousButton />
          {children}
          <NextButton />
        </div>
      </div>
    </>
  );
};

export default Layout;
