import React from 'react';
import Title from '../atoms/Title';
import ExperienceItem from '../molecules/ExperienceItem';
import { experienceData } from '../data/experienceData.ts'; // Importación corregida

const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-16 md:py-20">
      <Title level="h2" className="text-left flex items-center mb-8">
        <svg className="w-8 h-8 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.282-8.452-3.268m-2.903 9.471A11.96 11.96 0 0012 21c4.97 0 9.284-2.847 11.16-6.942m-10.741-5.719A8.001 8.001 0 0112 4c.675 0 1.334.09 1.972.26C14.161 6.556 16.5 9 16.5 9c-.66.861-1.393 1.636-2.185 2.336L12 14l-2.315-2.664C8.893 10.636 8.16 9.861 7.5 9c0 0 2.339-2.444 3.528-6.74zM12 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        Experiencia laboral
      </Title>
      <div className="relative border-l-2 border-gray-700 pl-8">
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;