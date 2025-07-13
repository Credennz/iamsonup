
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
            <img  onClick={() => navigate('/')}
                    src="logo.png"
                    className="logo-sonup"
                  />
         
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/projects')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              WORK
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-800">
            <nav className="flex flex-col py-4">
              <button 
                onClick={() => navigate('/projects')}
                className="px-6 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
              >
                WORK
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="px-6 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
              >
                CONTACT
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
