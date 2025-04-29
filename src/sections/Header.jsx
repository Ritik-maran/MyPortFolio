import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-gray-300 shadow-md p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <h1 className="text-2xl font-serif transition duration-200 hover:scale-110">
        Port<b className="text-red-700 font-bold">Folio</b>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6">
        {["home", "about", "quality", "skills", "projects", "contact"].map(
          (id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-black font-bold hover:text-red-700 transition ${
                  activeSection === id ? "text-red-700 underline" : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Hire Me Button (Visible on Desktop) */}
      <button className="hidden md:block p-2 rounded-full bg-red-700 text-white font-bold shadow-md transition duration-200 hover:scale-110">
        Hire me
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-gray-300 shadow-lg p-5 flex flex-col items-center md:hidden">
          {["home", "about", "quality", "skills", "projects", "contact"].map(
            (id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-black font-bold py-2 hover:text-red-700 transition ${
                  activeSection === id ? "text-red-700 underline" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            )
          )}
          <button className="mt-4 p-2 w-full bg-red-700 text-white font-bold rounded-lg shadow-md transition duration-200 hover:scale-105">
            Hire me
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
