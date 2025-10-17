import { describe, it, expect } from 'vitest';
import { projectsData } from '../components/data/projectsData'; // Importa tus datos

describe('projectsData', () => {
  it('debería ser un array con al menos dos proyectos', () => {
    expect(Array.isArray(projectsData)).toBe(true);
    expect(projectsData.length).toBeGreaterThanOrEqual(2);
  });

  it('todos los proyectos deben tener los campos obligatorios (imageSrc, title, description, tags)', () => {
    projectsData.forEach(project => {
      expect(project).toHaveProperty('imageSrc');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('tags');
      
      expect(typeof project.imageSrc).toBe('string');
      expect(typeof project.title).toBe('string');
      expect(Array.isArray(project.tags)).toBe(true);
    });
  });
  
  it('el proyecto GameZone debe tener enlaces a código y preview', () => {
    const gameZoneProject = projectsData.find(p => p.title.includes('Gamezone'));
    
    expect(gameZoneProject).toBeDefined();
    // Verifica enlaces específicos de GameZone
    expect(gameZoneProject?.codeLink).toBe('https://github.com/BastianEd/Web_GameZon_Evaluacion_Uno');
    expect(gameZoneProject?.previewLink).toBe('https://gamezone-store.netlify.app/');
  });
});