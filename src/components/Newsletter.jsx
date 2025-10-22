import React from 'react';
import newsletterImage from '../assets/images/img.png';

const Newsletter = () => {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-blue-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src={newsletterImage} alt="news-img" className="w-full h-auto rounded-2xl" loading="lazy" />
        </div>
        <div className="text-white">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Get the latest updates</h2>
            <p className="text-xl text-blue-100">Sign up for our newsletter</p>
          </div>
          <form className="flex gap-4 mb-4">
            <input 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300" 
              placeholder="Email" 
            />
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Send
            </button>
          </form>
          <div className="text-sm text-blue-100">
            By signing up to our newsletter you agree to our
            <a href="#" className="underline mx-1">Terms of Service</a> and
            <a href="#" className="underline mx-1">Privacy policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;