import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LinkButton from '../components/atoms/LinkButton';

describe('LinkButton', () => {
  it('debería renderizar como un enlace con texto interno', () => {
    const url = 'https://test.com';
    render(<LinkButton to={url}>Visitar</LinkButton>);
    const link = screen.getByRole('link', { name: /visitar/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', url);
  });

  it('debería usar la variante "primary" por defecto y "yellow" si se especifica', () => {
    // Primary (default)
    const { rerender } = render(<LinkButton to="#">Botón Primario</LinkButton>);
    expect(screen.getByRole('link', { name: /botón primario/i })).toHaveClass('bg-blue-600'); 
    
    // Yellow variant
    rerender(<LinkButton to="#" variant="yellow">Botón Amarillo</LinkButton>);
    expect(screen.getByRole('link', { name: /botón amarillo/i })).toHaveClass('bg-yellow-600');
  });

  it('debería agregar atributos para enlaces externos', () => {
    const externalUrl = 'https://www.linkedin.com/';
    render(<LinkButton to={externalUrl} icon="linkedin">LinkedIn</LinkButton>);
    const link = screen.getByRole('link', { name: /linkedin/i });
    
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});