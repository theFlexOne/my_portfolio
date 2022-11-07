import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ReactComponent as PrevArrow } from "./assets/arrow prev.svg";
import { ReactComponent as NextArrow } from "./assets/arrow next.svg";

const pagePaths = ["home", "projects", "about", "contact"];

function App() {
  const path = useLocation().pathname.slice(1);
  const navigate = useNavigate();

  const handlePrevPageClick = () => {
    const curIdx = pagePaths.indexOf(path);
    const lastIdx = pagePaths.length - 1;
    const prevIdx = curIdx === 0 ? lastIdx : curIdx - 1;
    navigate(pagePaths[prevIdx]);
  };

  const handleNextPageClick = () => {
    const curIdx = pagePaths.indexOf(path);
    const lastIdx = pagePaths.length - 1;
    const nextIdx = curIdx === lastIdx ? 0 : curIdx + 1;
    navigate(pagePaths[nextIdx]);
  };

  return (
    <div className="App">
      <Header />
      <div>
        <div className="prev-page">
          <button onClick={handlePrevPageClick}>
            <PrevArrow className="arrow" />
          </button>
        </div>
        <Main />
        <div className="next-page">
          <button onClick={handleNextPageClick}>
            <NextArrow className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
