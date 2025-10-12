import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <a
      href={to}
      className="relative py-2 px-4 text-primaryText hover:text-accent font-medium transition-colors duration-300"
    >
      {children}
    </a>
  );
};

export default NavLink;
