import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Image from '../../assets/joven.jpg';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-20">
      <Title level="h2" className="text-left flex items-center mb-8">
        <svg className="w-8 h-8 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        Sobre mí
      </Title>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        <div className="md:w-3/4">
          <Text className="mb-4">
            Example
          </Text>
          <Text className="mb-4">
            Parrafo2
          </Text>
          <Text>
            Texto normal <span className="text-accent font-semibold">Texto no normal</span> Texto normal
          </Text>
        </div>
        <div className="md:w-1/4 flex-shrink-0">
          <img src={Image} alt="Miguel Ángel" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;