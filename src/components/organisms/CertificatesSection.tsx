import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import { certificatesData } from '../data/certificatesData';

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificados" className="py-16 md:py-20">
      <Title level="h2" className="text-left flex items-center mb-8">
        <svg className="w-8 h-8 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        Certificados
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => ( // <-- Mapea los datos para generar los divs
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <Text className="text-sm text-gray-400 mb-2">{cert.issuer}</Text>
            <Text className="text-sm text-gray-400">{cert.date}</Text>
            
            {/* Nuevo: Muestra la foto del certificado */}
            <img
              src={cert.imageUrl}
              alt={`Certificado de ${cert.title}`}
              className="mt-4 w-full h-auto rounded-lg shadow-md mb-4"
            />
            
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-accent hover:underline">Ver Certificado</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;