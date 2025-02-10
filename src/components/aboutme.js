import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

import { animationConfig } from "./../constants";

function AboutMe() {
  const [hasAnimatedName, setHasAnimatedName] = useState(false);
  const [hasAnimatedAboutDescription, setHasAnimatedAboutDescription] = useState(false);
  return (
    <Element id="about" className="w-full border-b border-gray-600 pb-10 mb-10 md:mb-16">
      <motion.h2
        {...animationConfig(hasAnimatedName, setHasAnimatedName, 0.1)}
        className="pb-2 text-3xl font-semibold text-gray-300"
      >
        About Me
      </motion.h2>
      <motion.p
        {...animationConfig(hasAnimatedAboutDescription, setHasAnimatedAboutDescription, 0.3)}
        className="md:my-4 py-2 text-base text-gray-400 px-4 md:px-0"
      >
        I'm <b className="text-gray-300">Angelo Villanueva </b> from the Philippines. I graduated with a degree in
        Information Technology from Colegio De Santa Rita de San Carlos Inc. I enjoy coding, playing video games, and
        constantly learning new things, especially in programming. I'm passionate about turning ideas into reality
        through code and design, and I love the challenge of solving problems and creating innovative solutions.
      </motion.p>
    </Element>
  );
}

export default AboutMe;
