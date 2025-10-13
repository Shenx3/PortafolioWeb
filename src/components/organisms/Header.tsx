// Header es el componente de la barra de navegación superior.
// Cambia su estilo al hacer scroll para mejorar la experiencia de usuario.
// Incluye enlaces a secciones clave del sitio web con iconos representativos.
import React, { useState, useEffect } from 'react';
import { FaRegEnvelope, FaUser, FaBriefcase, FaCode } from 'react-icons/fa';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

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

  // Clases dinámicas para la barra de navegación
  const navClasses = `flex space-x-10 p-4 rounded-full border border-gray-700 transition-all duration-300 ${
    scrolled ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-gray-800 shadow-lg'
  }`;

  const headerClasses = `py-4 fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
    scrolled ? 'bg-transparent' : 'bg-darkBackground'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex justify-center items-center px-4">
        <nav className={navClasses}>
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
          <a href="#contacto" className="text-current hover:text-accent transition-colors">
            <FaRegEnvelope className="inline-block mr-1" /> Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;