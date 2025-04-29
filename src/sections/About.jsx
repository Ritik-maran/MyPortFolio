import React from "react";
import { motion } from "framer-motion";
import prfImage from "../images/prm_mndir.jpg";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="relative min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-16 lg:px-32 bg-[rgb(60,60,60)] text-white"
    >
      {/* Profile Image (Left on Desktop, Center on Mobile) */}
      <motion.img
        src={prfImage}
        alt="Krishna"
        className=" w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full transition duration-300 hover:scale-105 hover:shadow-red-500/50"
      />

      {/* Text Content */}
      <div className="mt-10 lg:mt-0 lg:ml-16 space-y-5 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold hover:text-red-300 transition duration-300">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed hover:text-white transition duration-300">
          I’m Ritik, a passionate <span className="text-red-500">Frontend & Full Stack Developer</span> and aspiring Full Stack Engineer. 
          With a strong foundation in <span className="text-red-400">React.js, JavaScript, and Django</span>, I enjoy creating modern, 
          dynamic, and responsive web applications. My goal is to build seamless user experiences while constantly learning and evolving in the tech space.
        </p>

        {/* Skills List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          {["HTML", "CSS", "JavaScript", "React.js", "Django", "MongoDB"].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-gray-700 text-center rounded-lg shadow-md hover:shadow-red-500/50"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Resume Download Button */}
        <a
          href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" target="_blank"
          download
          className="inline-block mt-5 px-6 py-3 bg-white text-red-700 font-bold rounded-lg shadow-lg 
          transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-red-700 to-purple-500 hover:text-white"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}

export default About;
