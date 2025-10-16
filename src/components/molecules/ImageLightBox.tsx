// src/components/molecules/ImageLightbox.tsx

import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  // Si no está abierto, no renderizar nada
  if (!isOpen) return null;

  return (
    // Fondo oscuro con transición para animación fluida (fade-in/out)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose} // Cerrar al hacer clic en el fondo
    >
      <div 
        className="relative p-2 max-w-full max-h-full sm:p-4"
        onClick={(e) => e.stopPropagation()} // Prevenir el cierre al hacer clic en la propia imagen
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white hover:text-accent transition-colors z-50 p-2 bg-gray-800 rounded-full"
          aria-label="Cerrar imagen"
        >
          <FaTimes size={24} />
        </button>
        
        <img
          src={imageSrc}
          alt={imageAlt}
          // Establece el tamaño máximo del modal y asegura que la imagen se ajuste
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ImageLightbox;