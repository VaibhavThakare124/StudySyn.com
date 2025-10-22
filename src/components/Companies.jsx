import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GoogleIcon from '../assets/images/Google.svg';
import MicrosoftIcon from '../assets/images/Microsoft.svg';
import LinkedinIcon from '../assets/images/linkedin.svg';
import VectorEduIcon from '../assets/images/VectorEdu.svg';

gsap.registerPlugin(ScrollTrigger);

const Companies = () => {
  const companyGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const companyLogos = companyGridRef.current?.children;
      if (!companyLogos) return;

      gsap.set(companyLogos, { opacity: 0, y: 50 });
      gsap.to(companyLogos, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: companyGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Trusted by the best</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" ref={companyGridRef}>
          {[
            { name: 'Google', icon: GoogleIcon },
            { name: 'Microsoft', icon: MicrosoftIcon },
            { name: 'Linkedin', icon: LinkedinIcon },
            { name: 'VectorEdu', icon: VectorEduIcon }
          ].map((company, index) => (
            <div key={index} className="flex flex-col items-center gap-4 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <img src={company.icon} alt={company.name} className="w-12 h-12" />
              <span className="font-semibold text-gray-700">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;