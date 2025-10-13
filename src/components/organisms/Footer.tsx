// Footer es un componente que muestra el pie de página del sitio web.
// Incluye el año actual, derechos de autor y enlaces de navegación.
import React from 'react';
import Text from '../atoms/Text';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-darkBackground py-8 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <Text className="mb-4 md:mb-0">
          &copy; {currentYear} Bastián Bravo. Todos los derechos reservados.
        </Text>
        <div className="flex space-x-6">
          <a href="#sobre-mi" className="text-secondaryText hover:text-accent transition-colors">Sobre mí</a>
          <a href="#contacto" className="text-secondaryText hover:text-accent transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;