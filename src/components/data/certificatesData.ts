// src/data/certificatesData.ts

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  imageUrl: string; // <-- Agregamos esta propiedad
}

export const certificatesData: Certificate[] = [
  {
    title: 'Artificial Intelligence Professional Certification - CAIPC®',
    issuer: 'Certiprof',
    date: 'Octubre 2025',
    credentialUrl: 'https://www.credly.com/badges/0d50fabd-dca1-466a-bc24-50b7075811e3/public_url',
    imageUrl: 'src/assets/ia-certificate.png', // <-- Ruta de la imagen
  },
  {
    title: 'Python Essentials 1 Certification - CISCO®',
    issuer: 'Cisco',
    date: 'Junio 2024',
    credentialUrl: 'https://www.credly.com/badges/014075ff-aa25-4c5a-b2bc-eed163ec47f9/public_url',
    imageUrl: 'src/assets/python.png', // <-- Ruta de la imagen
  },
  // Añade más objetos de certificado aquí
];