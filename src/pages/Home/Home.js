import "./home.css";
import profileImg from "../../assets/website_self_3.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="panel text">
        <div className="name">
          <p className="first-name">eric</p>
          <p className="last-name">hafvenstein</p>
        </div>

        <div className="description">
          <p>full stack</p>
          <p>web developer</p>
        </div>
      </div>
      <div className="panel image">
        <img
          className="self-image"
          src={profileImg}
          alt="Eric Hafvenstein profile black and white"
        />
      </div>
    </section>
  );
};

export default Home;
