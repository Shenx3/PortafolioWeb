import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CertificatesSection from '../components/organisms/CertificatesSection';

describe('CertificatesSection', () => {
  it('debería renderizar el título de la sección y los certificados reales', () => {
    render(<CertificatesSection />);
    expect(screen.getByText('Certificados')).toBeInTheDocument();

    // 2. Modifica estas líneas para buscar los títulos de certificado reales:
    // Título 1
    expect(screen.getByText('Artificial Intelligence Professional Certification - CAIPC®')).toBeInTheDocument(); 
    // Título 2
    expect(screen.getByText('Python Essentials 1 Certification - CISCO®')).toBeInTheDocument(); 
  });

  it('cada certificado debería tener un enlace para verificar la credencial', () => {
    render(<CertificatesSection />);
    
    // Con los datos reales, también son 2 enlaces
    const links = screen.getAllByRole('link', { name: /Ver Certificado/i });
    expect(links.length).toBe(2); 
    
    links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});