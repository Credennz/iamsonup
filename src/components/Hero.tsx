
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-width section-padding text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            An entrepreneur building ventures that <br/>disrupt, challenge, and redefine industries
          </h1>
          
          {/* Profile image in glowing card */}
          <div className="flex justify-center my-12">
            <div className="relative">
              <div className="w-48 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl p-1 backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl overflow-hidden">
                  <img 
                    src="sonup.jpg" 
                    alt="Nick Tarasov"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-3xl blur-xl"></div>
            </div>
          </div>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I don’t just launch startups — I create movements. As the mind behind ventures like Baaja, Credennz, Quantsignal, and StockSe, I merge trading mastery, market psychology, and unconventional thinking to craft products that shape the future. I work at the intersection of opportunity, risk, and vision.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
