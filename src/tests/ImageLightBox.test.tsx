import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ImageLightbox from '../components/molecules/ImageLightBox';

describe('ImageLightbox', () => {
  let mockOnClose: ReturnType<typeof vi.fn>;
  
  const mockImage = {
    src: 'test-image.jpg',
    alt: 'Project Preview'
  };
  
  // Limpiamos el mock antes de cada prueba para que la cuenta sea precisa
  beforeEach(() => {
    mockOnClose = vi.fn();
  });

  // (Se omiten los tests que pasaron para enfocarnos en los fallidos)

  it('debería llamar a onClose UNA SOLA vez al hacer clic en el fondo oscuro', () => {
    render(<ImageLightbox isOpen={true} onClose={mockOnClose} imageSrc={mockImage.src} imageAlt={mockImage.alt} />);
    
    // Buscamos el div más externo que tiene onClick={onClose}
    // Es el padre que contiene tanto la imagen como el botón de cerrar.
    const outerContainer = screen.getByRole('img').closest('div')?.parentElement as HTMLElement;
    
    fireEvent.click(outerContainer);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1); 
  });
  
  it('NO debería llamar a onClose al hacer clic en la imagen (stopPropagation)', () => {
    render(<ImageLightbox isOpen={true} onClose={mockOnClose} imageSrc={mockImage.src} imageAlt={mockImage.alt} />);
    
    // Buscamos el elemento que tiene e.stopPropagation(): el padre directo de la imagen
    const innerClickTarget = screen.getByRole('img').parentElement as HTMLElement;
    
    // Simula el clic en el elemento con stopPropagation
    fireEvent.click(innerClickTarget);
    
    // Verifica que la función no se haya llamado
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});