// ProjectCard es un componente que muestra una tarjeta de proyecto con imagen, título, descripción, etiquetas y enlaces.
// Incluye efectos de hover para mejorar la interactividad y utiliza componentes atómicos para la estructura.
import React, { useState } from 'react'; // Importar useState
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import LinkButton from '../atoms/LinkButton';
import Tag from '../atoms/Tag';
import ImageLightbox from '../molecules/ImageLightBox'; // Importar el nuevo componente

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  codeLink?: string;
  previewLink?: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, tags, codeLink, previewLink }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // Estado para el lightbox

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Contenedor de la imagen ahora es clickeable */}
        <div 
          onClick={openLightbox} 
          className="cursor-pointer relative overflow-hidden" // Añadir cursor-pointer para indicar que es clickeable
        >
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-48 object-cover object-top transition-transform duration-500 hover:scale-110" // Añadir efecto de hover para la imagen
          />
          {/* Opcional: Overlay para indicar que se puede hacer clic */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
            <svg className="w-10 h-10 text-white opacity-0 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
          </div>
        </div>
        
        <div className="p-6">
          <Title level="h4" className="!text-xl text-primaryText mb-2">
            {title}
          </Title>
          <Text className="text-gray-400 text-sm mb-4">
            {description}
          </Text>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
          <div className="flex gap-4">
            {codeLink && (
              <LinkButton to={codeLink} variant="outline" icon="code">
                Code
              </LinkButton>
            )}
            {previewLink && (
              <LinkButton to={previewLink} variant="outline" icon="preview">
                Preview
              </LinkButton>
            )}
          </div>
        </div>
      </div>
      
      {/* Nuevo componente Lightbox */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        imageSrc={imageSrc}
        imageAlt={title}
      />
    </>
  );
};

export default ProjectCard;