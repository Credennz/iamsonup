
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [gradientIndex, setGradientIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const gradients = [
    'from-amber-900 via-amber-800 to-stone-900',
    'from-orange-900 via-red-800 to-amber-900',
    'from-red-900 via-orange-800 to-yellow-900',
    'from-yellow-900 via-amber-800 to-orange-900',
    'from-stone-900 via-amber-800 to-red-900',
    'from-amber-800 via-orange-900 to-stone-800',
    'from-blue-900 via-blue-800 to-slate-900',
    'from-indigo-900 via-purple-800 to-blue-900',
    'from-purple-900 via-violet-800 to-indigo-900',
    'from-cyan-900 via-teal-800 to-blue-900',
    'from-emerald-900 via-green-800 to-teal-900',
    'from-violet-900 via-fuchsia-800 to-purple-900',
    'from-teal-900 via-cyan-800 to-emerald-900',
    'from-fuchsia-900 via-pink-800 to-violet-900',
    'from-green-900 via-emerald-800 to-cyan-900'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className={`min-h-screen bg-gradient-to-br ${gradients[gradientIndex]} relative overflow-hidden transition-all duration-1000 ease-in-out`}
    >
      <div className="container-width section-padding relative z-10 min-h-screen flex flex-col">
        <div className={`transition-all duration-1000 flex-1 flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Top section */}
          <div className="pt-16 pb-8">
            <div className="text-left mb-8">
              <p className="text-stone-300 text-sm font-light tracking-wide uppercase mb-4">
                WANT TO COLLABORATE?
              </p>
              <div className="w-full h-px bg-stone-400 mb-8"></div>
            </div>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-stone-200 text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
                  Don't hesitate
                </h2>
              </div>
              
              {/* Let's chat button */}
              <div className="flex items-center gap-3">
                <button className="bg-stone-200 hover:bg-white text-black px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                  Let's chat
                </button>
                <button className="bg-red-400 hover:bg-red-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-105">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-stone-400 mt-8"></div>
          </div>

          {/* Main TARASOV text */}
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-stone-200 text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold tracking-wider leading-none">
              <img src='sonup.png' ></img>
            </h1>
          </div>

          {/* Footer section */}
          <div className="flex items-end justify-between pt-8 pb-8">
            <div className="text-stone-400 text-sm">
              <p>© 2016-2024</p>
              <p>6:25:37 PM</p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-right">
              <div className="space-y-2">
                <button className="text-stone-300 hover:text-stone-200 transition-colors text-sm block">
                  WORK
                </button>
                <button className="text-stone-300 hover:text-stone-200 transition-colors text-sm block">
                  ABOUT
                </button>
              </div>
              <div className="space-y-2">
                <button className="text-stone-300 hover:text-stone-200 transition-colors text-sm block">
                  TWITTER
                </button>
                <button className="text-stone-300 hover:text-stone-200 transition-colors text-sm block">
                  INSTAGRAM
                </button>
                <button className="text-stone-300 hover:text-stone-200 transition-colors text-sm block">
                  LINKEDIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
