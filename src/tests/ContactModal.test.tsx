import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactModal from '../components/molecules/ContactModal';

describe('ContactModal', () => {
  const mockOnClose = vi.fn();

  it('NO debería renderizarse cuando isOpen es false', () => {
    render(<ContactModal isOpen={false} onClose={mockOnClose} />);
    expect(screen.queryByText('Contacto')).not.toBeInTheDocument();
  });

  it('debería renderizarse y mostrar detalles de contacto cuando isOpen es true', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    // Verifica que el correo esté visible
    expect(screen.getByText('bastianbravotobar@gmail.com')).toBeInTheDocument(); 
    // Verifica el número de teléfono
    expect(screen.getByText('+56 9 1234 5678')).toBeInTheDocument(); 
  });

  it('debería llamar a onClose al hacer clic en el botón de cerrar', () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />);
    
    const closeButton = screen.getByLabelText('Cerrar');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});