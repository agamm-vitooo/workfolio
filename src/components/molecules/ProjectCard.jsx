import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../UI/3d-card";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);  

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <CardContainer key={project.id} className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.name}
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={project.image}
                alt={`${project.name} thumbnail`}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-6">
              <CardItem
                translateZ={20}
                as="a"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Demo →
              </CardItem>

              <CardItem
                translateZ={20}
                as="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                GitHub
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default ProjectCard;
