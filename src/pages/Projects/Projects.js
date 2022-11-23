import { useOutletContext } from "react-router-dom";
import "./projects.css";

const Projects = ({ images }) => {
  const { yahtzeeTn, posPizzaTn, prenticeStreetBarbersTn, weatherAppTn } =
    images;

  return (
    <section className="projects">
      <ProjectCard
        title="Yahtzee"
        details={`
        My fifth and final project for the Flatiron School software engineering bootcamp.
        Combining a React frontend with a Ruby on Rails backend. Written in vanilla CSS and leverages SVGs for game UI
      `}
        src={yahtzeeTn}
        alt="Yahtzee thumbnail"
        selected
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
    </section>
  );
};

const ProjectCard = ({ details, title, selected, link, ...other }) => {
  return (
    <article className={`project-card${selected ? " selected" : ""}`} onClick>
      <div className="image">
        <img {...other} alt="project card" width="400" />
      </div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="details">{details}</p>
      </div>
    </article>
  );
};

export default Projects;
