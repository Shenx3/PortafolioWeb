// src/components/organisms/Header.tsx

import React, { useState, useEffect } from 'react';
import NavLink from '../molecules/NavLink';
import { FaRegEnvelope, FaUser, FaBriefcase, FaCode } from 'react-icons/fa';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) { // El número 150 es el punto de quiebre. Puedes ajustarlo.
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

  // Clases dinámicas para la barra de navegación
  const navClasses = `flex space-x-6 p-2 rounded-full border border-gray-700 transition-all duration-300 ${
    scrolled ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-gray-800 shadow-lg' // INVERTIDO
  }`;
  
  // Clases dinámicas para el header
  const headerClasses = `py-4 fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
    scrolled ? 'bg-transparent' : 'bg-darkBackground' // INVERTIDO
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex justify-center items-center px-4">
        <nav className={navClasses}>
          <NavLink to="#experiencia">
            <FaBriefcase className="inline-block mr-1" /> Experiencia
          </NavLink>
          <NavLink to="#certificados">
            <FaCode className="inline-block mr-1" /> Certificados
          </NavLink>
          <NavLink to="#proyectos">
            <FaCode className="inline-block mr-1" /> Proyectos
          </NavLink>
          <NavLink to="#sobre-mi">
            <FaUser className="inline-block mr-1" /> Sobre mí
          </NavLink>
          <NavLink to="#contacto">
            <FaRegEnvelope className="inline-block mr-1" /> Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;