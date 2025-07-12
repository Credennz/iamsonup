import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const About = () => {
  const companies = [
    { name: 'accenture', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
    { name: 'BCG', logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center' },
    { name: 'NASA', logo: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=120&h=60&fit=crop&crop=center' },
    { name: 'BARCLAYS', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop&crop=center' },
    { name: 'Royal Caribbean Group', logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=60&fit=crop&crop=center' },
    { name: 'nauto', logo: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=120&h=60&fit=crop&crop=center' },
    { name: 'Cordless', logo: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=120&h=60&fit=crop&crop=center' },
    { name: 'Deloitte', logo: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=120&h=60&fit=crop&crop=center' },
    { name: 'nexar', logo: 'https://images.unsplash.com/photo-1611532736557-64de1817c9dd?w=120&h=60&fit=crop&crop=center' },
    { name: 'SKODA', logo: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=120&h=60&fit=crop&crop=center' },
    { name: 'SCENTBIRD', logo: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=120&h=60&fit=crop&crop=center' },
    { name: 'Raiffeisen BANK', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop&crop=center' },
  ];

  const experiences = [
    {
      period: 'Current',
      position: 'Senior Product Designer',
      company: 'PricedHubble'
    },
    {
      period: '2020-2021',
      position: 'Product Designer',
      company: 'Reality (acquired by PricedHubble)'
    },
    {
      period: '2018-2019',
      position: 'Awwwards Jury',
      company: 'Member of the International Awwwards Jury'
    },
    {
      period: '2017-2021',
      position: 'Senior Designer',
      company: 'Humbleteam'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 pt-24">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-5xl md:text-6xl font-light">I'm a Designer</h1>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-8">
              <span className="text-5xl md:text-6xl font-light">living in</span>
              <div className="w-8 h-8 rounded overflow-hidden mx-2">
                <img 
                  src="https://images.unsplash.com/photo-1541849546-216549ae216d?w=32&h=32&fit=crop" 
                  alt="Czech Republic Flag" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-5xl md:text-6xl font-light">Prague,</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-300">Czech Republic</h2>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              With 7 years of experience, I've helped startups raise over $300M in 
              investments. I've contributed to 50+ projects across 20+ industries, from 
              pre-seed startups to Fortune 500 companies. Working in a fast-paced 
              environment, collaborating with small product teams, and 
              communicating directly with founders is something I genuinely enjoy. I 
              have strong experience in building B2B products, driving them from 
              concept to release by working directly with developers on design 
              implementation. I'm independent, proficient at managing stakeholders, 
              and capable of leading projects on my own.
            </p>
            
            <p>
              I'm passionate about product design, interaction, branding, growth 
              strategies, copywriting, engineering, and marketing. Recently, I've been 
              exploring spatial and VR/AR design and technology, constantly seeking 
              new ways to create immersive and engaging experiences.
            </p>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 rounded-lg p-6 flex items-center justify-center h-24 hover:bg-gray-800/50 transition-colors"
            >
              <span className="text-gray-400 text-sm font-medium text-center">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <h3 className="text-4xl font-light mb-12">Experience</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-2">
                <p className="text-gray-500 text-sm">{exp.period}</p>
                <h4 className="text-white font-medium">{exp.position}</h4>
                <p className="text-gray-400">{exp.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Section */}
        <div className="border-t border-gray-800 pt-8 mb-20">
          <p className="text-gray-500 text-sm mb-4">WANT TO COLLABORATE?</p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div>
              <h2 className="text-lg mb-4 text-gray-400">Don't hesitate</h2>
              <div className="text-8xl md:text-9xl font-bold leading-none">
                TARASOV
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                Let's chat
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-end text-sm text-gray-500">
            <div>
              <p>© 2018-2024</p>
              <p>CITY JAM</p>
            </div>
            <div className="text-right space-y-1">
              <p>WORK</p>
              <p>ABOUT</p>
              <div className="mt-4 space-y-1">
                <p>TWITTER</p>
                <p>INSTAGRAM</p>
                <p>LINKEDIN</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;