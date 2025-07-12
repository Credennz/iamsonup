
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
     {
      title: "Baaja",
      category: "",
      image: "baaja.jpeg",
      description: "Analytics dashboard design"
    },
    {
      title: "QuantSignal",
      category: "",
      image: "quantsignal.jpeg",
      description: "Music streaming interface"
    },
    {
      title: "Credennz",
      category: "",
      image: "credenz1.jpeg",
      description: "Corporate website design"
    },
    {
      title: "StockSe",
      category: "",
      image: "stockse.jpeg",
      description: "Social media application"
    }
  ];

  return (
    <section id="work" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container-width section-padding">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/projects')}
              className="bg-purple-500 hover:bg-purple-600 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 work-btn"
            >
              ( All Work )
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
