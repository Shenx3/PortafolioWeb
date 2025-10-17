import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NavLink from '../components/molecules/NavLink';

describe('NavLink', () => {
  it('debería renderizar como un enlace con la URL correcta', () => {
    const url = '#seccion-test';
    render(<NavLink to={url}>Mi Sección</NavLink>);
    
    const linkElement = screen.getByRole('link', { name: /mi sección/i });
    
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', url);
  });

  it('debería tener las clases de estilo por defecto para el hover', () => {
    render(<NavLink to="#">Enlace</NavLink>);
    const linkElement = screen.getByText('Enlace');
    
    // Verifica las clases de estilo por defecto para el hover
    expect(linkElement).toHaveClass('hover:text-accent');
    expect(linkElement).toHaveClass('transition-colors duration-300');
  });
});