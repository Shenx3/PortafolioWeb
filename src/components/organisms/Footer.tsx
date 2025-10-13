// src/components/organisms/Footer.tsx

import React from 'react';
import Text from '../atoms/Text';

// Definimos la interfaz para recibir el prop
interface FooterProps {
  openModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-darkBackground py-8 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <Text className="mb-4 md:mb-0">
          &copy; {currentYear} Bastián Bravo. Todos los derechos reservados.
        </Text>
        <div className="flex space-x-6">
          <a href="#sobre-mi" className="text-secondaryText hover:text-accent transition-colors">Sobre mí</a>
          <button onClick={openModal} className="text-secondaryText hover:text-accent transition-colors">
            Contacto
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;