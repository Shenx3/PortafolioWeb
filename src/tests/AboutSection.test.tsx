import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AboutSection from '../components/organisms/AboutSection';

// FIX: Mockeamos la imagen joven.jpg esperando la ruta literal que JSDOM produce.
vi.mock('../../assets/joven.jpg', () => ({
  default: '/src/assets/joven.jpg', 
}));

describe('AboutSection', () => {
  it('debería renderizar el título de la sección y texto clave', () => {
    render(<AboutSection />);
    
    // Verifica el título principal
    expect(screen.getByRole('heading', { level: 2, name: /Sobre mí/i })).toBeInTheDocument();
    
    // FIX APLICADO: Buscamos la parte del texto que está agrupada en el <span>
    expect(screen.getByText('Ingeniería Informática en DuocUC.')).toBeInTheDocument(); 
    
    // Buscamos el segundo <span>
    expect(screen.getByText('Inteligencia Artificial')).toBeInTheDocument();
    
    // Este texto está continuo en un <p> y no tiene problemas
    expect(screen.getByText(/proactiva y orientada a los resultados/i)).toBeInTheDocument();
  });

  it('debería renderizar la imagen de perfil con el alt text y fuente literal correctos', () => {
    render(<AboutSection />);
    
    const image = screen.getByAltText('Bastian Bravo');
    expect(image).toBeInTheDocument();
    
    // Esperamos la ruta literal
    expect(image).toHaveAttribute('src', '/src/assets/joven.jpg'); 
    expect(image).toHaveClass('rounded-lg shadow-lg');
  });
});