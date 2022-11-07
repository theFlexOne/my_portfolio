import "./home.css";
import profileImg from "../../assets/website_self_3.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="panel text">
        <h1 className="name">
          eric <span>hafvenstein</span>
        </h1>
        <div className="description">
          <p>full stack</p>
          <p>web developer</p>
        </div>
      </div>
      <div className="panel image">
        <img
          src={profileImg}
          alt="Eric Hafvenstein profile black and white"
          height="400"
        />
      </div>
    </section>
  );
};

export default Home;
