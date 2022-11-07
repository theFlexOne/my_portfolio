import "./projects.css";
import posPizzaTn from "../../assets/pos-pizza_thumbnail.jpg";
import yahtzeeTn from "../../assets/Yahtzee_thumbnail.jpg";
import prenticeStreetBarbersTn from "../../assets/prentice-street-barbers_thumbnail.jpg";
import weatherAppTn from "../../assets/weather-app_thumbnail.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectCard
        title="Yahtzee"
        details={`
        My fifth and final project for the Flatiron School software engineering bootcamp.
        Combining a React frontend with a Ruby on Rails backend. Written in vanilla CSS and leverages SVGs for game UI
      `}
        src={yahtzeeTn}
        alt="Yahtzee thumbnail"
      />
      <ProjectCard
        title="POS-Pizza"
        details={`
        My second project for the Flatiron School software engineering bootcamp.
        This first app I built using React. It exploits JSON Server to mimic a backend.
        (Full MERN update coming soon!) 
      `}
        src={posPizzaTn}
        alt="POS-Pizza thumbnail"
      />
      <ProjectCard
        title="Weather App"
        details={`Details here`}
        src={weatherAppTn}
        alt="Weather App thumbnail"
      />
      <ProjectCard
        title="Prentice Street Barbers"
        details={`Details here`}
        src={prenticeStreetBarbersTn}
        alt="Prentice Street Barbers thumbnail"
      />
    </div>
  );
};

const ProjectCard = ({ details, title, ...otherProps }) => {
  return (
    <div className="project-card">
      <div className="image">
        <img {...otherProps} alt="project card" width="400" />
      </div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="details">{details}</p>
      </div>
    </div>
  );
};

export default Projects;
