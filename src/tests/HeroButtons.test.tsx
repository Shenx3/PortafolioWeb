import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroButtons from '../components/molecules/HeroButtons';

describe('HeroButtons', () => {
  it('debería renderizar 3 botones principales: Contáctame, GitHub y LinkedIn', () => {
    render(<HeroButtons />);
    
    const contactButton = screen.getByRole('link', { name: /Contáctame/i });
    const githubButton = screen.getByRole('link', { name: /GitHub/i });
    const linkedinButton = screen.getByRole('link', { name: /LinkedIn/i });

    expect(contactButton).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
    expect(linkedinButton).toBeInTheDocument();
  });

  it('el botón Contáctame debería ser un enlace mailto', () => {
    render(<HeroButtons />);
    const contactButton = screen.getByRole('link', { name: /Contáctame/i });
    expect(contactButton).toHaveAttribute('href', 'mailto:bastianbravotobar@gmail.com');
  });

  it('el botón GitHub debería tener la URL correcta', () => {
    render(<HeroButtons />);
    const githubButton = screen.getByRole('link', { name: /GitHub/i });
    expect(githubButton).toHaveAttribute('href', 'https://github.com/Shenx3');
  });
  
  it('el botón LinkedIn debería tener la URL correcta', () => {
    render(<HeroButtons />);
    const linkedinButton = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinButton).toHaveAttribute('href', 'https://www.linkedin.com/in/bastian-bravo-17b131370/');
  });
});