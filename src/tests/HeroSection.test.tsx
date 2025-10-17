import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HeroSection from '../components/organisms/HeroSection';

// Mock de la imagen (asset) para evitar el error de importación
vi.mock('../../assets/joven.jpg', () => ({
    default: '/src/assets/joven.jpg', 
}));

// No necesitamos mockear HeroButtons porque lo probaremos por el contenido real.

describe('HeroSection', () => {
  it('debería renderizar el título, la descripción y la imagen de perfil', () => {
    render(<HeroSection />);

    // Verifica el título H1
    expect(screen.getByRole('heading', { level: 1, name: /Hola, soy Bastián/i })).toBeInTheDocument();
    
    // FIX APLICADO: Buscamos solo el texto continuo dentro del <span>.
    expect(screen.getByText('Ingeniería Informatica en DuocUC')).toBeInTheDocument();
    expect(screen.getByText('Inteligencia Artificial.')).toBeInTheDocument();

    // Verifica la imagen y sus atributos
    const image = screen.getByAltText('Bastian');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'src/assets/joven.jpg'); // La ruta es literal aquí
  });

  it('debería renderizar los botones de llamada a la acción (HeroButtons) por su contenido real', () => {
    render(<HeroSection />);
    
    // FIX APLICADO: Buscamos los botones reales de HeroButtons que se inyectan.
    expect(screen.getByRole('link', { name: /Contáctame/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
  });
});