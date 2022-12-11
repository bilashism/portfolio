import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "../Projects/Project";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    axios.get(`projects.json`).then(({ data }) => {
      setAllProjects(data);
    });
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl mb-10 lg:mb-20">
          Projects that I've worked on
        </h2>
        <div className="grid grid-cols-1 items-center gap-10 lg:gap-20 mb-20">
          {allProjects.map(project => (
            <Project key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
