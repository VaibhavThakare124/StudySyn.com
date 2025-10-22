import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Companies from '../components/Companies';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Page1 = () => {
  return (
    <div className="font-sans ">
      <HeroSection />
      <Features />
      <Companies />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Page1;