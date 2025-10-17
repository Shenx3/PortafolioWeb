import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Separator from '../components/atoms/Separator';

describe('Separator', () => {
  it('debería renderizar un enlace con el ancla a la sección de experiencia', () => {
    render(<Separator />);
    
    const linkElement = screen.getByRole('link'); 
    
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '#experiencia'); 
  });

  it('debería contener el ícono SVG de la flecha', () => {
    render(<Separator />);
    
    // 1. Busca el elemento padre accesible (el enlace).
    const linkElement = screen.getByRole('link');
    
    // 2. FIX APLICADO: Busca la etiqueta SVG directamente DENTRO del enlace.
    // Esto evita el error de accesibilidad de RTL.
    const svgElement = linkElement.querySelector('svg'); 
    
    expect(svgElement).toBeInTheDocument();
    // Verifica que el SVG tenga las clases de estilo
    expect(svgElement).toHaveClass('w-6 h-6 text-accent');
  });
});