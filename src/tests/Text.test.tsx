import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Text from '../components/atoms/Text';

describe('Text', () => {
  it('debería renderizar el contenido pasado como hijo', () => {
    const content = 'Este es un párrafo de prueba.';
    render(<Text>{content}</Text>);
    
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('debería renderizar como un <p> y aplicar las clases de estilo por defecto', () => {
    render(<Text>Texto por defecto</Text>);
    const paragraph = screen.getByText('Texto por defecto');
    
    // 1. Verifica que sea un elemento de párrafo
    expect(paragraph.tagName).toBe('P');
    
    // 2. Verifica las clases de estilo por defecto
    expect(paragraph).toHaveClass('text-secondaryText');
    expect(paragraph).toHaveClass('text-base lg:text-lg');
  });

  it('debería fusionar las clases por defecto con las clases personalizadas', () => {
    const customClass = 'text-center font-bold';
    render(<Text className={customClass}>Texto centrado</Text>);
    const paragraph = screen.getByText('Texto centrado');

    // 1. Debe tener la clase por defecto
    expect(paragraph).toHaveClass('text-secondaryText');
    
    // 2. Debe tener la clase personalizada
    expect(paragraph).toHaveClass('text-center font-bold');
  });
});