import axios from "axios";
import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLocation } from "react-router-dom";
import Project from "../Projects/Project";
import "react-photo-view/dist/react-photo-view.css";

const ProjectDetails = () => {
  const location = useLocation();
  const projectId = Number(location?.pathname.split("/").pop());
  const [project, setProject] = useState({});

  useEffect(() => {
    axios.get(`/projects.json`).then(({ data }) => {
      const filtered = [...data].find(project => project?._id === projectId);

      setProject(filtered);
    });
  }, []);

  const images = [project?.images?.featured, project?.images?.display].flat();

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl mb-10 lg:mb-20">
          Project Details of{" "}
          <span className="text-purple-600">{project?.name}</span>
        </h2>
        <div className="py-10 mb-8">
          <PhotoProvider>
            <div className="grid grid-cols-4 max-w-4xl mx-auto gap-8">
              {images.map((item, index) => (
                <PhotoView key={index} src={item}>
                  <img
                    src={item}
                    alt={project?.name}
                    className="cursor-pointer drop-shadow"
                  />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
        <div className="">
          {project?._id && <Project project={project} isDetailed={true} />}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
