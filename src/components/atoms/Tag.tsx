// Tag es un componente simple que muestra una etiqueta estilizada con texto.
// Se puede usar para categorizar o resaltar información en la interfaz de usuario.
import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center rounded-full bg-blue-900/40 px-3 py-1 text-xs font-medium text-blue-300 ${className}`}>
      {children}
    </span>
  );
};

export default Tag;