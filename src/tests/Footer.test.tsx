import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from '../components/organisms/Footer';

describe('Footer', () => {
  const mockOpenModal = vi.fn();
  const currentYear = new Date().getFullYear();

  it('debería renderizar el copyright con el año actual', () => {
    render(<Footer openModal={mockOpenModal} />);
    // Verifica el texto de copyright
    expect(screen.getByText(`© ${currentYear} Bastián Bravo. Estudiante de Ingeniería Informática.`)).toBeInTheDocument();
  });

  it('debería renderizar el enlace de Inicio y el botón de Contacto', () => {
    render(<Footer openModal={mockOpenModal} />);
    
    // Verifica el enlace de navegación (Inicio)
    const homeLink = screen.getByRole('link', { name: /Inicio/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '#inicio');

    // Verifica el botón de contacto
    expect(screen.getByRole('button', { name: /Contacto/i })).toBeInTheDocument();
  });
  
  it('el botón de Contacto debería llamar a openModal al hacer clic', () => {
    render(<Footer openModal={mockOpenModal} />);
    
    const contactButton = screen.getByRole('button', { name: /Contacto/i });
    fireEvent.click(contactButton);
    
    expect(mockOpenModal).toHaveBeenCalledTimes(1);
  });
});