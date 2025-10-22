import React from 'react';
import StudySynLogo from '../assets/images/StudySyn.svg';
import InstagramIcon from '../assets/images/instagram.svg';
import LinkedinIcon from '../assets/images/linkedin.svg';
import MicrosoftIcon from '../assets/images/Microsoft.svg';
import TwitterIcon from '../assets/images/twitter.svg';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <footer className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-4">
            <a className="flex items-center gap-2 text-2xl font-bold text-white" href="#">
              <img className="w-8 h-8" src={StudySynLogo} alt="logo" />
              StudySync
            </a>
          </div>
          <p className="text-gray-400 mb-6">Seamless Learning for Brighter Futures.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300" href="#">
              <img src={InstagramIcon} alt="instagram" className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300" href="#">
              <img src={LinkedinIcon} alt="linkedin" className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300" href="#">
              <img src={MicrosoftIcon} alt="microsoft" className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300" href="#">
              <img src={TwitterIcon} alt="twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-semibold mb-4">Products</div>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Overview</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Solutions</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Customers</a></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-4">Company</div>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Investor Relations</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Jobs</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-4">Support</div>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Chat</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-4">Legal</div>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="border-t border-gray-700 text-center py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <p className="text-gray-400 text-sm">© 2021 - Present StudySync. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;