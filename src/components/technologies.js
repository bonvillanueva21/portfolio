import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

// technologies icons
import { TbBrandReact } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { animationConfig, iconVariants } from "./../constants";

function Technologies() {
  const [hasAnimatedTechTitle, setHasAnimatedTechTitle] = useState(false);
  const [hasAnimatedTechIcons, setHasAnimatedTechIcons] = useState(false);

  return (
    <Element id="technologies" className="w-full border-b border-gray-600 pb-10 mb-10 md:mb-16">
      <motion.h2
        {...animationConfig(hasAnimatedTechTitle, setHasAnimatedTechTitle, 0.1)}
        className="text-3xl font-semibold mb-10 text-center md:text-left text-gray-700 dark:text-gray-300"
      >
        Tech Stacks
      </motion.h2>
      <motion.div
        {...animationConfig(hasAnimatedTechIcons, setHasAnimatedTechIcons, 0.3)}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 dark:border-neutral-700 p-3"
        >
          <TbBrandHtml5 className="text-5xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 dark:border-neutral-700 p-3"
        >
          <TbBrandCss3 className="text-5xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 dark:border-neutral-700 p-3"
        >
          <TbBrandReact className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 dark:border-neutral-700 p-3"
        >
          <FaBootstrap className="text-5xl text-violet-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 dark:border-neutral-700 p-3"
        >
          <SiPhp className="text-5xl text-violet-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 dark:border-neutral-700 p-3"
        >
          <SiMysql className="text-5xl text-orange-500" />
        </motion.div>
      </motion.div>
    </Element>
  );
}

export default Technologies;
