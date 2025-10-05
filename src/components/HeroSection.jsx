import React from "react";
import { ChevronDown } from "lucide-react";

 const HeroSection = ({ isVisible }) => {
  return (
    <div className={`text-center py-16 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Exact Age</span>
      </h1>
      <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
        Discover your precise age in years, months, days, hours, minutes and seconds with our advanced calculator.
      </p>
      <button 
        onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2"
      >
        <span>Get Started</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
};

export default HeroSection;
