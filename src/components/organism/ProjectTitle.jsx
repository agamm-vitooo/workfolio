import React from "react";
import { Cover } from "../UI/Cover";

export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-4xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-10 relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          <Cover>Project</Cover>
      </h1>
    </div>
  );
}
