import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import prfImage from "../images/profileImage1.jpg";

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-32 bg-[rgb(60,60,60)] text-white"
    >
      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 lg:gap-20 z-10">
        {/* Profile Image */}
        <img
          src={prfImage}
          alt="Krishna"
          className="rounded-full shadow-2xl transition duration-300 hover:scale-105 hover:shadow-red-500/50 w-40 sm:w-56 md:w-64 lg:w-80 aspect-square object-contain p-4"
 />

        {/* Text Content */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold hover:text-red-400 transition duration-300">
            Hi, I'm <span className="text-red-500">Ritik</span>
          </h2>

          {/* Animated Typing Effect */}
          <p className="text-md sm:text-lg md:text-2xl font-medium text-gray-300 hover:text-white transition duration-300">
            <Typewriter
              words={["Frontend Developer", "Full Stack Developer", "React.js Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          {/* Call-to-Action Button */}
          <a
            href="#projects"
            className="inline-block mt-5 px-5 py-2 sm:px-6 sm:py-3 bg-white text-red-700 font-bold rounded-lg shadow-lg 
            transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r from-red-700 to-purple-500 hover:text-white"
          >
            View My Work
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
