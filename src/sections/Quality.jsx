import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "B.Tech in AI & ML",
    institution: "Vaishnavi Group of Institutions, Bhopal",
    year: "2022 - 2026",
    details: "Pursuing a Bachelor's degree specializing in Artificial Intelligence & Machine Learning.",
  },
  {
    title: "Full Stack Development Certification",
    institution: "Miracle IT Career Academy",
    year: "2024 - 2025",
    details: "Enrolled in a Full Stack Development course covering React, Django, and database management.",
  },
];

const experienceData = [
  {
    role: "Frontend Developer (Project)",
    company: "MovieZone (Personal Project)",
    year: "2024",
    details: "Developed a movie listing website using React.js, styled with Tailwind CSS, and managed state with Context API.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub",
    year: "2024 - Present",
    details: "Actively contributing to open-source projects, improving UI/UX, and fixing frontend issues in React-based projects.",
  },
];

function Quality() {
  return (
    <section id="quality" className="min-h-screen bg-[rgb(60,60,60)] text-white px-6 md:px-16 py-20">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-10 hover:text-red-400 transition duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education & Experience
      </motion.h2>

      {/* Grid Container */}
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Education Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 border-b-2 border-red-500 pb-2">
            Education
          </h3>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4 hover:shadow-red-500/50 transition duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h4 className="text-xl font-bold">{edu.title}</h4>
              <p className="text-gray-400">{edu.institution} ({edu.year})</p>
              <p className="text-gray-300 mt-2">{edu.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 border-b-2 border-green-500 pb-2">
            Experience
          </h3>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4 hover:shadow-green-500/50 transition duration-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h4 className="text-xl font-bold">{exp.role}</h4>
              <p className="text-gray-400">{exp.company} ({exp.year})</p>
              <p className="text-gray-300 mt-2">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Quality;
