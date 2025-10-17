import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ScrollToTopButton from '../components/atoms/ScrollToTopButton';

// Mockear window.scrollY y window.scrollTo para simular el scroll
const mockScrollTo = vi.fn();
// Define window.scrollY como una propiedad que podemos modificar
Object.defineProperty(window, 'scrollY', { writable: true, value: 0 });
window.scrollTo = mockScrollTo;

describe('ScrollToTopButton', () => {
  it('debería estar oculto (opacity-0) inicialmente (scrollY < 300)', () => {
    window.scrollY = 0; // Estado inicial: arriba
    render(<ScrollToTopButton />);
    
    const button = screen.getByRole('button', { name: /volver al inicio/i });
    expect(button).toHaveClass('opacity-0');
  });

  it('debería mostrarse (opacity-100) después de hacer scroll más allá de 300px', () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole('button', { name: /volver al inicio/i });
    
    // Simular scroll down
    window.scrollY = 350;
    // Disparar el evento de scroll para que se ejecute el useEffect
    fireEvent.scroll(window); 
    
    expect(button).toHaveClass('opacity-100');
  });

  it('debería llamar a window.scrollTo con comportamiento suave al hacer clic', () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole('button', { name: /volver al inicio/i });
    
    // Simular la visibilidad del botón para el clic
    window.scrollY = 400;
    fireEvent.scroll(window); 
    
    fireEvent.click(button);
    
    // Verifica que se llamó a la función de scroll con las opciones correctas
    expect(mockScrollTo).toHaveBeenCalledWith({ 
      top: 0, 
      behavior: 'smooth' 
    });
  });
});