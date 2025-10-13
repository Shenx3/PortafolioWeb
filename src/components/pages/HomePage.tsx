// src/components/pages/HomePage.tsx

import React, { useState } from 'react';
import HeroSection from '../organisms/HeroSection';
import ExperienceSection from '../organisms/ExperienceSection';
import ProjectsSection from '../organisms/ProjectsSection';
import AboutSection from '../organisms/AboutSection';
import CertificatesSection from '../organisms/CertificatesSection';
import Separator from '../atoms/Separator';
import ContactModal from '../molecules/ContactModal';
import Footer from '../organisms/Footer'; // <-- La importación del Footer se queda aquí
import Header from '../organisms/Header';
import ScrollToTopButton from '../atoms/ScrollToTopButton';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header openModal={openModal} />
      <HeroSection />
      <Separator />
      <ExperienceSection />
      <CertificatesSection />
      <ProjectsSection />
      <AboutSection />
      <Footer openModal={openModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;