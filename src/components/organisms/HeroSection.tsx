// HeroSection es la sección principal de la página de inicio.
// Presenta una imagen, un título, una descripción y botones de llamada a la acción.
import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import HeroButtons from '../molecules/HeroButtons';
import LinkButton from '../atoms/LinkButton';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="text-center py-20 md:py-32 pt-32">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <img 
            // Actualiza el src directamente
            src="src/assets/joven.jpg" 
            alt="Bastian" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-accent shadow-lg" 
          />
          <span className="absolute bottom-0 right-0 transform translate-y-1/2 bg-gray-700 text-sm text-gray-300 px-3 py-1 rounded-full border border-gray-600">
            Disponible para trabajar
          </span>
        </div>
      </div>
      <Title level="h1" className="mb-2">
        Hola, soy Bastián
      </Title>
      <Text className="text-xl md:text-2xl max-w-2xl mx-auto mb-4">
        Estudiante de segundo año de <span className="text-accent font-semibold">Ingeniería Informatica en DuocUC</span> especializado en el desarrollo de soluciones de <span className="text-accent font-semibold">Inteligencia Artificial.</span> Me estoy formando para crear aplicaciones y sistemas únicos que resuelvan problemas complejos.
      </Text>
      <HeroButtons />
    </section>
  );
};

export default HeroSection;