// Title es un componente que renderiza títulos con diferentes niveles (h1, h2, h3, h4).
// Permite personalizar el nivel del título y aplicar clases CSS adicionales a través de props.
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, level = 'h1', className = '' }) => {
  const Tag = level;
  const baseStyles = 'font-bold text-primaryText';

  const sizeStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl mb-4',
    h2: 'text-3xl md:text-4xl mb-6',
    h3: 'text-2xl md:text-3xl mb-4',
    h4: 'text-xl md:text-2xl mb-3',
  };

  return (
    <Tag className={`${baseStyles} ${sizeStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;