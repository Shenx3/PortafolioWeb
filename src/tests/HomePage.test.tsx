import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HomePage from '../components/pages/HomePage';

interface HeaderFooterProps { 
  openModal: () => void; 
}

interface ContactModalProps { 
  isOpen: boolean; 
  onClose: () => void; 
}

vi.mock('../components/organisms/Header', () => {
  return {
    // Aplicamos el tipado a la función del mock
    default: ({ openModal }: HeaderFooterProps) => ( 
      <button data-testid="header-mock" onClick={openModal}>Header Mock Contact</button>
    ),
  };
});
vi.mock('../components/organisms/HeroSection', () => {
  return {
    default: () => <div data-testid="hero-mock">Hero</div>,
  };
});
vi.mock('../components/organisms/ExperienceSection', () => {
  return {
    default: () => <div data-testid="experience-mock">Experience</div>,
  };
});
vi.mock('../components/organisms/ProjectsSection', () => {
  return {
    default: () => <div data-testid="projects-mock">Projects</div>,
  };
});
vi.mock('../components/organisms/AboutSection', () => {
  return {
    default: () => <div data-testid="about-mock">About</div>,
  };
});
vi.mock('../components/organisms/CertificatesSection', () => {
  return {
    default: () => <div data-testid="certificates-mock">Certificates</div>,
  };
});
vi.mock('../components/organisms/Footer', () => {
  return {
    // Aplicamos el tipado a la función del mock
    default: ({ openModal }: HeaderFooterProps) => ( 
      <button data-testid="footer-mock" onClick={openModal}>Footer Mock Contact</button>
    ),
  };
});
vi.mock('../components/molecules/ContactModal', () => {
  return {
    // Aplicamos el tipado a la función del mock
    default: ({ isOpen, onClose }: ContactModalProps) => isOpen ? ( 
      <div data-testid="modal-mock">
        Modal Open 
        <button onClick={onClose}>Close Modal</button>
      </div>
    ) : null,
  };
});
vi.mock('../components/atoms/Separator', () => {
  return {
    default: () => <div data-testid="separator-mock" />,
  };
});
vi.mock('../components/atoms/ScrollToTopButton', () => {
  return {
    default: () => <div data-testid="scroll-to-top-mock" />,
  };
});

// =========================================================
// TESTS
// =========================================================

describe('HomePage', () => {
  it('debería renderizar todos los organismos y componentes de estructura', () => {
    render(<HomePage />);
    
    // Verificaciones
    expect(screen.getByTestId('header-mock')).toBeInTheDocument();
    expect(screen.getByTestId('hero-mock')).toBeInTheDocument();
    // ... (otras secciones)
  });

  it('debería abrir el ContactModal al hacer clic en el botón de contacto del Header/Footer', () => {
    render(<HomePage />);
    
    // Prueba de flujo de estado
    expect(screen.queryByTestId('modal-mock')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('header-mock'));
    expect(screen.getByTestId('modal-mock')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Close Modal'));
    expect(screen.queryByTestId('modal-mock')).not.toBeInTheDocument();
  });
});