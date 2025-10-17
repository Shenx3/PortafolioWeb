import { render, screen } from '@testing-library/react';
import { Tag } from '../components/atoms/Tag';
import { describe, it, expect } from 'vitest';

describe('Tag', () => {
  it('debería renderizar correctamente el texto interno', () => {
    render(<Tag>React</Tag>);
    // Busca el elemento que contiene el texto "React"
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('debería aplicar las clases de estilo por defecto', () => {
    render(<Tag>TypeScript</Tag>);
    const tagElement = screen.getByText('TypeScript');

    // Comprueba las clases por defecto de Tailwind
    expect(tagElement).toHaveClass('inline-flex');
    expect(tagElement).toHaveClass('bg-blue-900/40');
    expect(tagElement).toHaveClass('text-blue-300');
  });

  it('debería fusionar las clases por defecto con las clases personalizadas', () => {
    render(<Tag className="bg-red-500">Alerta</Tag>);
    const tagElement = screen.getByText('Alerta');

    // Comprueba que las clases por defecto y la personalizada estén presentes
    expect(tagElement).toHaveClass('bg-blue-900/40');
    // NOTA: Tailwind maneja el conflicto, pero probamos que se pase la clase
    expect(tagElement).toHaveClass('bg-red-500');
  });
});