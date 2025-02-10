import profileImg from "./../assets/images/profile.png";

import { motion } from "framer-motion";
import { useState } from "react";

// socials icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Profile() {
  const [hasAnimatedProfile, setHasAnimatedProfile] = useState(false);
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={hasAnimatedProfile ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      onViewportEnter={() => {
        if (!hasAnimatedProfile) {
          setHasAnimatedProfile(true);
        }
      }}
      transition={{ type: "spring", stiffness: 30 }}
      className="border-2 border-gray-700 rounded-2xl px-10 py-12 max-w-lg"
    >
      <img src={profileImg} alt="Angelo Villanueva" className="mx-auto size-fit md:size-96 mb-10 rounded-xl" />

      {/* social */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <a
          href="https://github.com/bonvillanueva21"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 text-gray-300 hover:text-gray-600"
        >
          <FaGithub className="text-4xl mb-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/angelo-villanueva-92222b31a/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 text-gray-300 hover:text-blue-500"
        >
          <FaLinkedin className="text-4xl mb-2" />
        </a>
      </div>

      {/* education */}
      <h1 className="text-2xl font-semibold mb-2 text-center md:text-left text-gray-300">Hello, I'm</h1>
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center md:text-left text-gray-300 first-letter:text-orange-500">
        Angelo
      </h1>
      <div className=" flex  flex-wrap md:justify-center">
        <div className="w-full">
          <p className="text-gray-400">
            A passionate <b className="text-gray-300">Full Stack Developer</b> with a deep interest in creating dynamic
            and user-friendly applications. With experience in both front-end and back-end technologies, I specialize in
            developing functional and responsive websites. Always eager to learn new tools and frameworks, I enjoy
            turning ideas into reality through code and design.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
