import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

import { experience, animationConfig } from "./../constants";

function Experience() {
  const [hasAnimatedExpTitle, setHasAnimatedExpTitle] = useState(false);
  const [hasAnimatedExperiences, setHasAnimatedExperiences] = useState(false);

  return (
    <Element id="experience" className="w-full border-b border-gray-600 pb-10 mb-10 md:mb-16">
      <motion.h2
        {...animationConfig(hasAnimatedExpTitle, setHasAnimatedExpTitle, 0.1)}
        className="text-3xl font-semibold mb-10 text-gray-300"
      >
        Experience
      </motion.h2>
      {experience.map((experience, index) => (
        <motion.div
          key={index}
          {...animationConfig(hasAnimatedExperiences, setHasAnimatedExperiences, 0.3)}
          className="mb-8 flex flex-wrap md:justify-center px-4 md:px-0"
        >
          <div className="w-full md:w-1/4">
            <p className="text-gray-400 text-base mb-2">{experience.year}</p>
          </div>
          <div className="w-full max-w-xl md:w-3/4">
            <h6 className="mb-2 font-semibold text-gray-300">
              {experience.role} - <span className="text-base text-gray-300 font-normal">{experience.company}</span>
            </h6>
            <p className="text-gray-400">{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </Element>
  );
}

export default Experience;
