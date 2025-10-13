// src/components/organisms/Header.tsx

import React, { useState, useEffect } from 'react';
import { FaRegEnvelope, FaUser, FaBriefcase, FaCode, FaBars, FaTimes } from 'react-icons/fa';
import ContactModal from '../molecules/ContactModal'; // <-- ¡Importamos el nuevo modal!

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- Nuevo estado para el modal

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Cierra el menú de hamburguesa si está abierto
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const headerClasses = `py-4 fixed top-0 left-0 w-full z-10 transition-all duration-300 bg-darkBackground ${scrolled ? 'md:bg-transparent' : 'md:bg-darkBackground'}`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-white md:hidden">Bastián</h1>
        
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú de navegación para PC */}
        <nav className="hidden md:flex flex-grow justify-center">
          <div className={`flex space-x-8 p-4 rounded-full border border-gray-700 transition-all duration-300 ${
            scrolled ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-gray-800 shadow-lg'
          }`}>
            <a href="#experiencia" className="text-current hover:text-accent transition-colors">
              <FaBriefcase className="inline-block mr-1" /> Experiencia
            </a>
            <a href="#certificados" className="text-current hover:text-accent transition-colors">
              <FaCode className="inline-block mr-1" /> Certificados
            </a>
            <a href="#proyectos" className="text-current hover:text-accent transition-colors">
              <FaCode className="inline-block mr-1" /> Proyectos
            </a>
            <a href="#sobre-mi" className="text-current hover:text-accent transition-colors">
              <FaUser className="inline-block mr-1" /> Sobre mí
            </a>
            {/* El botón de contacto ahora abre el modal */}
            <button onClick={openModal} className="text-current hover:text-accent transition-colors">
              <FaRegEnvelope className="inline-block mr-1" /> Contacto
            </button>
          </div>
        </nav>

        {/* Menú desplegable para móvil */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-darkBackground/90 backdrop-blur-md p-4 flex flex-col items-center space-y-4 shadow-lg">
            <a href="#experiencia" className="flex items-center space-x-2 py-3 px-4 rounded-full bg-gray-800 text-current hover:text-accent transition-colors w-1/2 justify-center" onClick={toggleMenu}>
              <FaBriefcase /> Experiencia
            </a>
            <a href="#certificados" className="flex items-center space-x-2 py-3 px-4 rounded-full bg-gray-800 text-current hover:text-accent transition-colors w-1/2 justify-center" onClick={toggleMenu}>
              <FaCode /> Certificados
            </a>
            <a href="#proyectos" className="flex items-center space-x-2 py-3 px-4 rounded-full bg-gray-800 text-current hover:text-accent transition-colors w-1/2 justify-center" onClick={toggleMenu}>
              <FaCode /> Proyectos
            </a>
            <a href="#sobre-mi" className="flex items-center space-x-2 py-3 px-4 rounded-full bg-gray-800 text-current hover:text-accent transition-colors w-1/2 justify-center" onClick={toggleMenu}>
              <FaUser /> Sobre mí
            </a>
            {/* El botón de contacto en móvil también abre el modal */}
            <button onClick={openModal} className="flex items-center space-x-2 py-3 px-4 rounded-full bg-gray-800 text-current hover:text-accent transition-colors w-1/2 justify-center">
              <FaRegEnvelope /> Contacto
            </button>
          </nav>
        )}
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;