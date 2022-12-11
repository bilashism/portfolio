import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "../Projects/Project";

const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    axios.get(`projects.json`).then(({ data }) => {
      const filtered = [...data]
        .filter(project => project?.isFeatured)
        .filter((item, i, arr) => arr.indexOf(item) <= 2);

      setFeaturedProjects(filtered);
    });
  }, []);

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl mb-10 lg:mb-20">
          Some things I've built
        </h2>
        <div className="grid grid-cols-1 items-center gap-10 lg:gap-20 mb-20">
          {featuredProjects.map(project => (
            <Project key={project._id} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded bg-gradient-to-r from-rose-500 to-purple-500 hover:from-purple-500 hover:to-rose-500 transition-all ">
            <Link
              to="/projects"
              className="px-6 py-2 text-blue-800 bg-white block text-center w-full first-letter:uppercase">
              view all projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
