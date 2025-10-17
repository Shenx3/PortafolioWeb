import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/organisms/Header';
import { describe, it, expect, vi } from 'vitest';

describe('Header', () => {
  // Mock de la función openModal
  const mockOpenModal = vi.fn();

  it('debería renderizar los enlaces de navegación', () => {
    render(<Header openModal={mockOpenModal} />);

    // Verifica que los enlaces de navegación para PC estén en el documento (ocultos en móvil)
    expect(screen.getByText('Experiencia')).toBeInTheDocument();
    expect(screen.getByText('Certificados')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Sobre mí')).toBeInTheDocument();
  });

  it('debería llamar a openModal al hacer clic en el botón "Contacto"', () => {
    render(<Header openModal={mockOpenModal} />);

    // Busca el botón "Contacto" (ya sea en la versión de escritorio o móvil)
    const contactButton = screen.getByRole('button', { name: /contacto/i });

    fireEvent.click(contactButton);

    // Verifica que la función mock haya sido llamada
    expect(mockOpenModal).toHaveBeenCalledTimes(1);
  });
  
  // Test para el comportamiento móvil
  it('debería mostrar el menú de navegación en móvil al hacer clic en el icono de la hamburguesa', () => {
    render(<Header openModal={mockOpenModal} />);

    // 1. El menú móvil está oculto inicialmente (por defecto en las clases de Tailwind y la lógica de React)
    // El botón de "Experiencia" para móvil no debería ser visible si el menú está cerrado (o al menos no el contenedor)

    // 2. Encuentra el botón de la hamburguesa (Toggle navigation menu)
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    
    // 3. Haz clic en el botón para abrir el menú
    fireEvent.click(menuButton);

    // 4. Ahora, busca un elemento que solo aparece en el menú móvil para verificar que se abrió
    // En este caso, el enlace "Experiencia" dentro del menú desplegable es un buen candidato.
    // RTL no puede ver la clase 'hidden', pero podemos simular la apertura y ver si el contenido aparece.
    // El enlace "Experiencia" ahora estará presente en dos lugares (escritorio y el menú móvil recién abierto).
    const mobileExperienceLink = screen.getAllByText('Experiencia'); 
    // Si el menú se abre, debería haber dos elementos con el texto 'Experiencia' (uno de escritorio y otro móvil)
    expect(mobileExperienceLink.length).toBeGreaterThanOrEqual(2);
  });
});