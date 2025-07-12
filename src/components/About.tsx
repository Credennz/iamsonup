
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (



    <section id="about" ref={sectionRef} className=" bg-gradient-to-b from-purple-500 via-pink-500 to-orange-400">
     <section className='video-sec'>
 <div className="container-width section-padding">
        <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
          <img src='work.png' className='work-sec'></img>
          </div>
        </div>
      </div>
  <video className="video-background" autoPlay muted loop>
    <source src="https://www.baaja.shop/bg-vid.mp4" type="video/mp4"></source>
  </video>
</section>
      {/* <div className="container-width section-padding">
        <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Behind every market shift,
             
            </h2>
            <h3 className="text-3xl md:text-4xl font-light mb-6">
             there’s someone pulling the strings.
            </h3>
           
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Sometimes, that’s me.
            </h3>
              <h3 className="text-3xl md:text-4xl font-light mb-6">
              I build where others pause
              </h3>
               <h3 className="text-3xl md:text-4xl font-light">
              I grow what others doubt.
              </h3>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
