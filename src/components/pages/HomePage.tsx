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