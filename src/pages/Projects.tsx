import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PricedHubble",
      description: "Reimagine the employee real estate experience across 10 countries, launched online product using intelligent data, training teams around entire deals.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["Product Design", "Frontend", "Development", "SEO"],
      size: "large"
    },
    {
      id: 2,
      title: "Reality",
      description: "Created a brand platform prototype for a real estate startup, which was accepted by the steering committee within a year.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop",
      tags: ["Branding", "Product Design", "Frontend", "Marketing"],
      size: "large"
    },
    {
      id: 3,
      title: "Oxygen",
      description: "Working within brand constraints on a business music experience for DJ parties, Apple DJ client who develops. 650K+ UUA.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=600&fit=crop",
      tags: ["Branding", "UX", "Mobile", "Frontend"],
      size: "tall"
    },
    {
      id: 4,
      title: "Nivar",
      description: "Drone live online virtual tour service for property managers, from commercial and industrial properties to private residences.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=600&fit=crop",
      tags: ["Development", "Healthcare", "Marketing"],
      size: "tall"
    },
    {
      id: 5,
      title: "NASA",
      description: "Participated in application challenges where space commissions from external Space Mission.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
      tags: ["Product Design", "Frontend", "Research"],
      size: "tall"
    },
    {
      id: 6,
      title: "Saidgov",
      description: "Prepaid solutions that help payment apps reach FintTech BNPL economies, focusing on a connected ecosystem.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["AR", "Development", "Branding", "Product"],
      size: "wide"
    },
    {
      id: 7,
      title: "Scentbird",
      description: "Monthly design from a perfume studio helps consumers save money and gives for various OLO. Knowledge base system for engineers.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=600&fit=crop",
      tags: ["Product Design", "Frontend"],
      size: "tall"
    },
    {
      id: 8,
      title: "Marcell",
      description: "One Platform to clients around design speeds performance measurement and building a sweet brand.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
      tags: ["AR", "Development", "Healthcare"],
      size: "wide"
    },
    {
      id: 9,
      title: "Google Bank",
      description: "Working with Google Bank mobile offline mobile experience and creating the measured or Google pay.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop",
      tags: ["Branding", "UX"],
      size: "tall"
    }
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
                  <p className="text-sm leading-relaxed opacity-90">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-white/20 rounded backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-black rounded-3xl p-12 text-white">
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
        </div>
      </main>
    </div>
  );
};

export default Projects;