import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

import { projects, animationConfig } from "./../constants";

function Projects() {
  const [hasAnimatedProjectTitle, setHasAnimatedProjectTitle] = useState(false);
  const [hasAnimatedProjects, setHasAnimatedProjects] = useState(false);

  return (
    <Element transition={{ type: "spring", stiffness: 30 }} id="projects" className="w-full pb-10 mb-10 md:mb-16">
      <motion.h2
        {...animationConfig(hasAnimatedProjectTitle, setHasAnimatedProjectTitle, 0.1)}
        className="text-3xl font-semibold mb-10 text-gray-700 dark:text-gray-300"
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap justify-center md:justify-start">
        {projects.map((projects, index) => (
          <motion.div
            key={index}
            {...animationConfig(hasAnimatedProjects, setHasAnimatedProjects, 0.3)}
            className="group w-full md:w-1/2 pb-16 px-5"
          >
            <div className="rounded-lg bg-opacity-60 dark:bg-zinc-800 dark:bg-opacity-25 shadow-lg dark:shadow-none">
              <img src={projects.img} alt="project" height={400} width={400} className="object-fit rounded-t-lg" />
              <div className="px-6 pb-6">
                <h3 className="mt-6 text-base font-semibold text-gray-700 dark:text-gray-400 mb-2 uppercase">
                  {projects.title}
                </h3>
                <p className="text-base font-semibold mb-4 text-gray-500 dark:text-gray-500">{projects.description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects.techonologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-100 dark:text-orange-500 rounded-lg bg-zinc-500 dark:bg-zinc-700 py-1 px-3 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Element>
  );
}

export default Projects;
