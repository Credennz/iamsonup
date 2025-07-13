import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const About = () => {
  const companies = [
    { name: 'BAAJA', logo: '' },
    { name: 'QUANTSIGNAL', logo: '' },
    { name: 'CREDENNZ', logo: '' },
    { name: 'STOCKSE', logo: '' },
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
              <h1 className="text-5xl md:text-6xl font-light">I’m not just a founder.              </h1>
            
            </div>
            
            <div className="flex items-center gap-2 mb-8">
              <span className="text-5xl md:text-6xl font-light">I’m a trader of ideas, </span>
            
           
            </div>
              <div className="flex items-center gap-2 mb-8">
             
            
              <span className="text-5xl md:text-6xl font-light">a builder of ventures,</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-300"> and an architect of risk.</h2>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
           

              <p>I’ve launched startups that don’t just exist — they provoke change.  </p>

<p>From Baaja (an entertainment platform reshaping music bookings)
to Credennz (a future-driven digital venture),
from StockSe and Quantsignal (pioneering AI in trading and finance)
to OpinioSe and CrickSe (next-gen fantasy & sports platforms) —
each venture is a chapter in my obsession with bold execution.  </p>

<p>I move between industries, but the goal stays the same:
build, disrupt, dominate.
            </p>
            <p>My work isn’t about playing safe — it’s about stepping into unknown markets and creating something others hesitate to imagine.
Every project I touch is fueled by intuition, strategy, and relentless execution.</p>
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
{/* 
        <div className="border-t border-gray-800 pt-8 mb-20">
          <p className="text-gray-500 text-sm mb-4">WANT TO COLLABORATE?</p>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div>
              <h2 className="text-lg mb-4 text-gray-400">Don't hesitate</h2>
              <div className="text-8xl md:text-9xl font-bold leading-none">
                <img src='sonup.png' className='about-snp-img' ></img>
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
        </div> */}
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;