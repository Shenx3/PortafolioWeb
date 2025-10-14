// Definimos la interfaz Certificate y exportamos un array de certificados
import iaCertificate from '@/assets/ia-certificate.png';
import pythonCertificate from '@/assets/python.png';

interface Certificate { // Definimos la interfaz Certificate
  title: string; // Título del certificado
  issuer: string; // Emisor del certificado
  date: string; // Fecha del certificado
  credentialUrl: string; // URL del certificado
  imageUrl: string; // Ruta de la imagen
}

export const certificatesData: Certificate[] = [ // Exportamos un array de certificados
  { // Primer certificado
    title: 'Artificial Intelligence Professional Certification - CAIPC®', // Título del certificado
    issuer: 'Certiprof', // Emisor del certificado
    date: 'Octubre 2025', // Fecha del certificado
    credentialUrl: 'https://www.credly.com/badges/0d50fabd-dca1-466a-bc24-50b7075811e3/public_url', // URL del certificado
    imageUrl: iaCertificate, // Ruta de la imagen
  },
  { // Segundo certificado
    title: 'Python Essentials 1 Certification - CISCO®',
    issuer: 'Cisco', 
    date: 'Junio 2024',
    credentialUrl: 'https://www.credly.com/badges/014075ff-aa25-4c5a-b2bc-eed163ec47f9/public_url',
    imageUrl: pythonCertificate,
  },
];