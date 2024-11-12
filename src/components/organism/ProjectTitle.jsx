import React from "react";
import { Cover } from "../UI/Cover";
import ProjectSection from './ProjectSection';

export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-4xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          <Cover>Project</Cover>
      </h1>
      <div className="w-full text-center mt-4">
        <a 
          href="https://github.com/agamm-vitooo" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-white bg-black mb-12 rounded-md font-medium w-full sm:w-auto"
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
