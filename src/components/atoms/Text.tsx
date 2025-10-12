import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-secondaryText text-base lg:text-lg ${className}`}>
      {children}
    </p>
  );
};

export default Text;