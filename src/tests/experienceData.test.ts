import { describe, it, expect } from 'vitest';
import { experienceData } from '../components/data/experienceData'; // Importa tus datos

describe('experienceData', () => {
  it('debería ser un array con al menos tres experiencias', () => {
    expect(Array.isArray(experienceData)).toBe(true);
    expect(experienceData.length).toBeGreaterThanOrEqual(3);
  });

  it('todas las experiencias deben tener los campos obligatorios (title, company, duration, description)', () => {
    experienceData.forEach(exp => {
      expect(exp).toHaveProperty('title');
      expect(exp).toHaveProperty('company');
      expect(exp).toHaveProperty('duration');
      expect(exp).toHaveProperty('description');
      
      expect(typeof exp.title).toBe('string');
      expect(typeof exp.company).toBe('string');
    });
  });
  
  it('la experiencia de Decathlon debería tener un link opcional', () => {
    const decathlonExp = experienceData.find(e => e.company === 'Decathlon');
    expect(decathlonExp?.link).toBe('https://decathlonchile.gupy.io/');
  });
});