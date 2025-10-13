// ProjectCard es un componente que muestra una tarjeta de proyecto con imagen, título, descripción, etiquetas y enlaces.
// Incluye efectos de hover para mejorar la interactividad y utiliza componentes atómicos para la estructura.
import React from 'react';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import LinkButton from '../atoms/LinkButton';
import Tag from '../atoms/Tag';

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
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover object-top" />
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
  );
};

export default ProjectCard;