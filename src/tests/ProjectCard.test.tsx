import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from '../components/molecules/ProjectCard';

const mockProject = {
  imageSrc: 'src/assets/GameZone.png',
  title: 'Gamezone - Tienda Digital de Videojuegos',
  description: 'Tienda en línea de videojuegos.',
  tags: ['HTML5', 'CSS', 'JavaScript'],
  codeLink: 'https://github.com/BastianEd/Web_GameZon_Evaluacion_Uno',
  previewLink: 'https://gamezone-store.netlify.app/',
};

describe('ProjectCard', () => {
  it('debería renderizar el título, la descripción y las etiquetas', () => {
    render(<ProjectCard {...mockProject} />);
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(/Tienda en línea de videojuegos/i)).toBeInTheDocument();
    mockProject.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('debería abrir y cerrar el Lightbox al interactuar con la imagen y el botón de cerrar', () => {
    render(<ProjectCard {...mockProject} />);
    
    // 1. Lightbox no visible inicialmente (buscamos el botón de cerrar del lightbox)
    expect(screen.queryByLabelText('Cerrar imagen')).not.toBeInTheDocument();

    // 2. Simula el clic en el contenedor de la imagen para abrir el Lightbox
    const image = screen.getByAltText(mockProject.title);
    fireEvent.click(image.closest('div') as HTMLElement); 
    
    // 3. El Lightbox y su botón de cerrar deben estar visibles
    const closeButton = screen.getByLabelText('Cerrar imagen');
    expect(closeButton).toBeInTheDocument();
    
    // 4. Simula el clic en el botón de cerrar para cerrarlo
    fireEvent.click(closeButton);
    
    // 5. El Lightbox ya no debe estar en el documento
    expect(screen.queryByLabelText('Cerrar imagen')).not.toBeInTheDocument();
  });
});