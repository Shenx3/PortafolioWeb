import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExperienceItem from '../components/molecules/ExperienceItem'; 

const mockExperience = {
  title: 'Desarrollador de Pruebas',
  company: 'Testing Corp',
  duration: 'Enero 2024 - Presente',
  description: 'Escribir pruebas que siempre pasan.',
  link: 'https://testing.com',
};

describe('ExperienceItem', () => {
  it('debería renderizar todos los detalles de la experiencia', () => {
    render(<ExperienceItem {...mockExperience} />);

    // Verifica la presencia de texto
    expect(screen.getByText(mockExperience.title)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.company)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.duration)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.description)).toBeInTheDocument();
  });

  it('debería renderizar el enlace "Saber más" si se proporciona un link', () => {
    render(<ExperienceItem {...mockExperience} />);
    
    const link = screen.getByRole('link', { name: /Saber más/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockExperience.link);
  });
  
  it('NO debería renderizar el enlace "Saber más" si no se proporciona un link', () => {
    render(<ExperienceItem 
      title={mockExperience.title}
      company={mockExperience.company}
      duration={mockExperience.duration}
      description={mockExperience.description}
    />);
    
    // Verifica que el elemento con el texto "Saber más" no exista
    expect(screen.queryByRole('link', { name: /Saber más/i })).not.toBeInTheDocument();
  });
});