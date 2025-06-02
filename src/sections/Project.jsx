import React from 'react';

const projects = [
  {
    title: 'MovieZone',
    description: 'A React-based movie listing platform with Tailwind styling and Context API for state management.',
    image: 'https://www.shutterstock.com/image-vector/logo-film-maker-video-design-260nw-1550779340.jpg',
    link: 'https://movie-zone-r7ou-git-main-ritik-marans-projects.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'A fully responsive portfolio website showcasing my skills, experience, and projects.',
    image: 'https://images-platform.99static.com//7oFNtqVR8ahfgC4iiWRvwrTGjrY=/415x831:1242x1658/fit-in/500x500/99designs-contests-attachments/94/94965/attachment_94965358',
    link: 'https://hindi-cinema-k3rr-git-main-ritik-marans-projects.vercel.app/',
  },
];

const Projects = () => (
  <section id="projects" className="bg-[rgb(60,60,60)] text-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold hover:text-red-400 transition duration-300 mb-12 text-center">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" bg-gray-800 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-red-500/50 duration-300 "
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="bg-cover w-full h-56 object-cover transition transform hover:scale-110 duration-300"
            />

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block text-red-400 font-semibold hover:text-red-300 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
