import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "QuantSignal",
      description: "",
      image: "quantsignal.jpeg",
      size: "large"
    },
    {
      id: 2,
      title: "Credennz",
      description: "",
      image: "credenz1.jpeg",
      size: "large"
    },
    {
      id: 3,
      title: "Baaja",
      description: "",
      image: "baaja.jpeg",
      size: "tall"
    },
    {
      id: 4,
      title: "StockSe",
      description: "",
      image: "stockse.jpeg",
      size: "large"
    },
    
  ];

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'tall':
        return 'md:row-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 pt-24">
        <h1 className="text-4xl md:text-5xl font-light mb-16 text-white">
          Selected projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] mb-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${getGridClass(project.size)}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                 
                </div>

                {/* Tags */}
              {/*   <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-white/20 rounded backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
       {/*  <div className="bg-black rounded-3xl p-12 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <h2 className="text-lg mb-4">Don't hesitate</h2>
              <div className="text-8xl md:text-9xl font-bold leading-none">
                TARASOV
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                Let's chat
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-end mt-8 text-sm text-gray-400">
            <div>
              <p>© 2024 NICK</p>
              <p>TARASOV</p>
            </div>
            <div className="text-right">
              <p>WORKS</p>
              <p>ABOUT</p>
              <p>CONTACT</p>
              <p>LINKEDLN</p>
            </div>
          </div>
        </div> */}
      </main>
        <Contact />
      <Footer />
    </div>
  );
};

export default Projects;