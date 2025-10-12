import React from 'react';
import { FaLinkedin, FaEnvelope, FaCode, FaEye } from 'react-icons/fa';

interface LinkButtonProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: 'linkedin' | 'email' | 'code' | 'preview';
  variant?: 'primary' | 'secondary' | 'outline' ;
  className?: string;
}

const icons = {
  linkedin: FaLinkedin,
  email: FaEnvelope,
  code: FaCode,
  preview: FaEye,
};

const LinkButton: React.FC<LinkButtonProps> = ({ to, onClick, children, icon, variant = 'primary', className = '' }) => {
  const IconComponent = icon ? icons[icon] : null;

  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600',
    outline:
      'bg-transparent text-gray-300 border border-gray-500 hover:border-blue-600 hover:text-blue-600',
  };

  const content = (
    <>
      {IconComponent && <IconComponent className="mr-2" />}
      {children}
    </>
  );

  const isExternal = to.startsWith('http') || to.startsWith('mailto');

  return (
    <a
      href={to}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </a>
  );
};

export default LinkButton;
