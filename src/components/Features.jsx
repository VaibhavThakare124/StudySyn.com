import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PersonalizedLearnIcon from '../assets/images/PersonalizedLearn.svg';
import AffordabilityIcon from '../assets/images/Affordability.svg';
import IndustryPatnerIcon from '../assets/images/IndustryPatner.svg';
import InnovativeTechIcon from '../assets/images/InnovativeTech.svg';
import GithubIcon from '../assets/images/github.svg';
import AnalyticsIcon from '../assets/images/Analytics.svg';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featureGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const featureCards = featureGridRef.current?.children;
      if (!featureCards) return;

      gsap.set(featureCards, { opacity: 0, y: 50 });
      gsap.to(featureCards, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: featureGridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: PersonalizedLearnIcon,
      title: 'Personalized Learning',
      description: 'Offer tailored learning experiences through AI and machine learning.',
    },
    {
      icon: AffordabilityIcon,
      title: 'Affordability',
      description: 'Provide high-quality education at an affordable price point.',
    },
    {
      icon: IndustryPatnerIcon,
      title: 'Industry Partnerships',
      description: 'Collaborate with well-known companies and institutions.',
    },
    {
      icon: InnovativeTechIcon,
      title: 'Innovative Technology',
      description: 'Utilize cutting-edge technology for immersive learning.',
    },
    {
      icon: GithubIcon,
      title: 'Responsive Support',
      description: 'Provide exceptional customer support and assistance.',
    },
    {
      icon: AnalyticsIcon,
      title: 'Analytics and Insights',
      description: 'Offer detailed progress tracking and analytics.',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our competitive advantage</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of real written text but is random or otherwise generated.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={featureGridRef}>
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;