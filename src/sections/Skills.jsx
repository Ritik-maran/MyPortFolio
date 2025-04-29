import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-olive-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Databases", icon: <FaDatabase className="text-green-400" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[rgb(60,60,60)] text-white px-6 md:px-16 py-20">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold hover:text-red-400 transition duration-300 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-red-500/50 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-5xl mb-4 transition-transform transform hover:rotate-12">{skill.icon}</div>
            <h4 className="text-xl font-bold text-olive-400 transition hover:text-white">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
