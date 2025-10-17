import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Title from '../components/atoms/Title';

describe('Title', () => {
  it('debería renderizar como <h1> por defecto', () => {
    const text = 'Título Principal';
    render(<Title>{text}</Title>);
    const h1 = screen.getByText(text).closest('h1');
    expect(h1).toBeInTheDocument();
    // Verifica estilos de h1
    expect(h1).toHaveClass('text-4xl md:text-5xl lg:text-6xl mb-4'); 
  });

  it('debería renderizar como <h2> cuando se especifica el nivel', () => {
    const text = 'Título Secundario';
    render(<Title level="h2">{text}</Title>);
    const h2 = screen.getByText(text).closest('h2');
    expect(h2).toBeInTheDocument();
    // Verifica estilos de h2
    expect(h2).toHaveClass('text-3xl md:text-4xl mb-6'); 
  });

  it('debería aceptar y aplicar clases CSS adicionales', () => {
    const text = 'Título Personalizado';
    const customClass = 'text-red-500';
    render(<Title level="h3" className={customClass}>{text}</Title>);
    const h3 = screen.getByText(text).closest('h3');
    expect(h3).toHaveClass(customClass);
  });
});