import { describe, it, expect } from 'vitest';
import { certificatesData } from '../components/data/certificatesData';


describe('certificatesData', () => {
  it('debería tener al menos dos certificados', () => {
    expect(certificatesData.length).toBeGreaterThanOrEqual(2);
  });

  it('el primer certificado debe ser sobre Inteligencia Artificial y de Certiprof', () => {
    const aiCert = certificatesData[0];
    expect(aiCert.title).toContain('Artificial Intelligence');
    expect(aiCert.issuer).toBe('Certiprof');
    expect(aiCert.date).toBe('Octubre 2025');
    // Verifica que la URL de la credencial sea correcta
    expect(aiCert.credentialUrl).toBe('https://www.credly.com/badges/0d50fabd-dca1-466a-bc24-50b7075811e3/public_url');
  });

  it('todos los certificados deberían tener un título, emisor, fecha y URL de credencial definidos', () => {
    certificatesData.forEach(cert => {
      expect(cert.title).toBeTypeOf('string');
      expect(cert.issuer).toBeTypeOf('string');
      expect(cert.date).toBeTypeOf('string');
      expect(cert.credentialUrl).toBeTypeOf('string');
    });
  });
});