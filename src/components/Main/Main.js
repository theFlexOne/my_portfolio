import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import "./main.css";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="home" element={<Projects />} /> */}
          {/* <Route path="home" element={<About />} /> */}
          {/* <Route path="home" element={<Contact />} /> */}
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
