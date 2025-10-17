// AboutSection es una sección que presenta información sobre mí, incluyendo una imagen y varios párrafos de texto.
// Utiliza componentes atómicos para la estructura y el estilo, y es responsiva para diferentes tamaños de pantalla.
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
            Hola, soy Bastián. Actualmente, soy estudiante de segundo año de <span className="text-accent font-semibold">Ingeniería Informática en DuocUC.</span>
          </Text>
          <Text className="mb-4">
            Soy una persona proactiva y orientada a los resultados, con una gran capacidad para el aprendizaje rápido y el trabajo en equipo.
          </Text>
          <Text className="mb-4">
            Mi pasión por la tecnología me ha llevado a especializarme en <span className="text-accent font-semibold">Inteligencia Artificial</span>, un área en la que me estoy formando para crear soluciones innovadoras y de gran impacto.
          </Text>
          <Text>
            Estoy ansioso por aplicar mis conocimientos para resolver problemas complejos y contribuir a proyectos que definan el futuro de la tecnología.
          </Text>
        </div>
        <div className="md:w-1/4 flex-shrink-0">
          <img src={Image} alt="Bastian Bravo" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;