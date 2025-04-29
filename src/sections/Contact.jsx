import React from 'react';


 const handleSubmit = (e) => {
   e.preventDefault();
   alert(`Thank you for visit! We will contact you soon.`);
  
 };

const Contact = () => (
  

  <section id="contact" className="py-20 text-center bg-[rgb(60,60,60)] text-white px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold hover:text-red-400 transition duration-300 mb-6">
      Contact Me
    </h2>
    <p className="text-lg text-gray-300 mb-6">
      Feel free to reach out for collaborations or just a friendly hello.
    </p>

    <form className="mt-6 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Your Name" 
        className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 mb-4 transition"
      />
      <input 
        type="email" 
        placeholder="Your Email" 
        className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 mb-4 transition"
      />
      <textarea 
        placeholder="Your Message" 
        className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 mb-4 h-32 resize-none transition"
      ></textarea>
      
      <button className="w-full px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-600 transition transform hover:scale-105">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
