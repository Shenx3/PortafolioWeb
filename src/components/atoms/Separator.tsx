// Separador entre HeroSection y ExperienceSection

import React from 'react';

const Separator: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center py-25 px-4"> {/* Aumenta el padding vertical */}
      <div className="absolute w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="relative z-10 p-2 rounded-full bg-darkBackground border border-gray-700">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
  );
};

export default Separator;