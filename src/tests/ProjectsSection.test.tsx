import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from '../components/organisms/ProjectsSection'; // Asegúrate de la ruta
import { projectsData } from '../components/data/projectsData'; 

// Importa ProjectCard solo para la referencia de la prueba de integración
// La dependencia de ProjectCard en ProjectsSection.tsx será manejada por Vitest/Vite

describe('ProjectsSection', () => {
  it('debería renderizar el título de la sección y todas las tarjetas de proyectos reales', () => {
    render(<ProjectsSection />);
    
    // 1. Verifica el título principal de la sección
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    
    // 2. Verifica que los títulos de los proyectos reales se hayan renderizado
    // Usamos los títulos reales de projectsData.ts
    projectsData.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
    });

    // Opcional: Verifica el número de tarjetas renderizadas.
    // Buscamos los títulos de las tarjetas, que son h4s.
    const projectTitles = screen.getAllByRole('heading', { level: 4 });
    expect(projectTitles.length).toBe(projectsData.length);
  });
  
  it('cada tarjeta de proyecto debería tener sus botones de Code y Preview', () => {
    render(<ProjectsSection />);
    
    // Verificamos el número de enlaces de Code y Preview (hay 2 proyectos, por lo tanto, 2 enlaces de cada uno)
    const codeLinks = screen.getAllByRole('link', { name: /Code/i });
    const previewLinks = screen.getAllByRole('link', { name: /Preview/i });
    
    expect(codeLinks.length).toBe(projectsData.length); 
    expect(previewLinks.length).toBe(projectsData.length);
    
    // Verifica que el primer enlace de preview sea el correcto
    expect(previewLinks[0]).toHaveAttribute('href', projectsData[0].previewLink);
  });
});