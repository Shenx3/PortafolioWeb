// src/components/molecules/ContactModal.tsx

import React from 'react';
import { FaTimes, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative bg-gray-800 p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md mx-2 sm:mx-4 border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contacto</h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center space-x-3 flex-wrap">
            <FaEnvelope className="text-accent" />
            <a href="mailto:bastianbravotobar@gmail.com" className="hover:text-accent transition-colors">
              <span className="sm:hidden">Correo</span>
              <span className="hidden sm:inline-block">bastianbravotobar@gmail.com</span>
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <FaPhone className="text-accent" />
            <span className="text-gray-300">
              +56 9 1234 5678
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <FaLinkedin className="text-accent" />
            <a href="https://www.linkedin.com/in/bastian-bravo-17b131370/" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactModal;