import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroImage from '../assets/images/bgImage.jpg';

const HeroSection = () => {
  const contentLeftRef = useRef(null);
  const contentRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([contentLeftRef.current, contentRightRef.current], { opacity: 0 });
      gsap.fromTo(
        contentLeftRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
      );
      gsap.fromTo(
        contentRightRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-50 min-h-screen flex items-center relative z-0">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div ref={contentLeftRef} className="text-center lg:text-left text-gray-900">
          <p className="text-lg font-semibold text-indigo-600 mb-4">Very proud to introduce</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Seamless Learning for Brighter Futures
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Our innovative platform offers an effortless and seamless approach to learning, empowering students of all ages to achieve brighter futures. Join us on a transformative journey to simplify education and unlock your full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#start" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Now
            </a>
            <a href="#tour" className="bg-gray-900/5 hover:bg-gray-900/10 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-gray-900/20 hover:border-gray-900/30">
              Take Tour
            </a>
          </div>
        </div>
        <div ref={contentRightRef} className="flex justify-center lg:justify-end">
          <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white">
            <img src={HeroImage} alt="sectionImage" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;