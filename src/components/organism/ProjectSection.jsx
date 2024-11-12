import React from 'react';
import ProjectCard from '../molecules/ProjectCard';

const ProjectSection = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-evenly mb-16">
      <ProjectCard />
    </div>
  );
}

export default ProjectSection;
