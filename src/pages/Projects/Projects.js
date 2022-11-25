// import "./projects.css";

import { useEffect, useRef, useState } from "react";
const projectList = ["yahtzee", "psb", "posPizza", "weatherApp"];

const Projects = ({ images }) => {
  const { yahtzeeTn, posPizzaTn, prenticeStreetBarbersTn, weatherAppTn } =
    images;
  const [activeProject, setActiveProject] = useState(null);
  const projectsData = useRef();

  useEffect(() => {
    const data = {
      yahtzee: {
        img: yahtzeeTn,
        title: "Yahtzee",
        description: `My fifth and final project for the Flatiron School software engineering bootcamp.
      Combining a React frontend with a Ruby on Rails backend. Written in vanilla CSS and leverages SVGs for game UI
      `,
      },
      posPizza: {
        img: posPizzaTn,
        title: "POS Pizza",
        description: `My second project for the Flatiron School software engineering bootcamp.
        This first app I built using React. It exploits JSON Server to mimic a backend.
        (Full MERN update coming soon!) 
        `,
      },
      psb: {
        img: prenticeStreetBarbersTn,
        title: "Prentice Street Barbers",
        description: `Details here`,
      },
      weatherApp: {
        img: weatherAppTn,
        title: "Weather App",
        description: `Details here`,
      },
    };
    projectsData.current = data;
    console.log("data", data);
    setActiveProject(data[projectList[0]]);
  }, [posPizzaTn, prenticeStreetBarbersTn, weatherAppTn, yahtzeeTn]);

  return (
    activeProject && (
      <main className="flex flex-1 flex-col px-12 pb-8 pt-4 justify-center gap-8 max-w-screen-lg mx-auto">
        <h1 className="text-5xl tracking-wide border-b-2 border-gray-300 border-opacity-30 w-fit px-4 pb-2">
          Projects
        </h1>
        <div className="flex flex-1 gap-6">
          <div className="flex flex-col gap-2 basis-5/6 py-6 px-16 border border-black/25 shadow items-center bg-gray-800 rounded-md">
            <h2 className="text-center text-4xl tracking-wider mb-2">
              {activeProject.title}
            </h2>
            <img
              src={activeProject.img}
              alt={activeProject.img}
              className="border border-black/25 rounded-lg shadow h-full max-h-[200px]"
            />
            <p className="text-justify my-auto text-base leading-loose">
              {activeProject.description}
            </p>
          </div>
          <div className="flex flex-col basis-1/6 items-center justify-center gap-8 px-1 py-8">
            {Object.entries(projectsData.current).map(([key, data]) => {
              return (
                <img
                  src={data.img}
                  alt={data.img}
                  className="w-24 border select-none shadow"
                  onClick={() => setActiveProject(projectsData.current[key])}
                />
              );
            })}
          </div>
        </div>
      </main>
    )
  );
};

// const ProjectCard = ({ details, title, selected, link, ...other }) => {
//   return (
//     <article className={`project-card${selected ? " selected" : ""}`} onClick>
//       <div className="image">
//         <img {...other} alt="project card" width="400" />
//       </div>
//       <div className="info">
//         <p className="title">{title}</p>
//         <p className="details">{details}</p>
//       </div>
//     </article>
//   );
// };

export default Projects;
