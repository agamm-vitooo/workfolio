import React from 'react';
import ProjectCard from '../molecules/ProjectCard';

const ProjectSection = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-evenly p-4">
      <ProjectCard />
      
      {/* "See Other Projects" Button */}
      <div className="w-full text-center mt-6">
        <a 
          href="https://github.com/agamm-vitooo" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-black mb-24 rounded-md font-medium w-full sm:w-auto"
        >
          See Other Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l7 7-7 7M4.5 12h16" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectSection;
