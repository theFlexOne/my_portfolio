// import "./home.css";
import profileImg from "../../assets/website_self_3.jpg";

const Home = () => {
  return (
    <main className="flex flex-1 gap-5 justify-center items-center my-auto">
      <div className="flex flex-col gap-24">
        <div className="text-6xl flex flex-col gap-4 tracking-5xl mr-12">
          <p className="text-white">eric</p>
          <p className="last-name">hafvenstein</p>
        </div>

        <div className="flex flex-col gap-4 items-end text-4xl tracking-xl">
          <p>full stack</p>
          <p className="text-white">web developer</p>
        </div>
      </div>
      <div className="panel image">
        <img
          className="max-w-lg max-h-[70vh]"
          src={profileImg}
          alt="Eric Hafvenstein profile black and white"
        />
      </div>
    </main>
  );
};

export default Home;
