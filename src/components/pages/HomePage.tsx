// HomePage es el componente principal de la página de inicio que integra varias secciones como Hero, Experiencia, Proyectos, Sobre mí y Certificados.
// Utiliza componentes atómicos y organiza la estructura de la página.
import React from 'react';
import HeroSection from '../organisms/HeroSection';
import ExperienceSection from '../organisms/ExperienceSection';
import ProjectsSection from '../organisms/ProjectsSection';
import AboutSection from '../organisms/AboutSection';
import Footer from '../organisms/Footer';
import CertificatesSection from '../organisms/CertificatesSection';
import Separator from '../atoms/Separator';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Separator />
      <ExperienceSection />
      <CertificatesSection />
      <ProjectsSection />
      <AboutSection />
    </>
  );
};

export default HomePage;