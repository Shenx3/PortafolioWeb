// ExperienceItem representa un ítem de experiencia laboral o proyecto.
// Muestra el título, empresa, duración, descripción y un enlace opcional para más información.
import React from 'react';
import Text from '../atoms/Text';
import Title from '../atoms/Title';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  link?: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, duration, description, link }) => {
  return (
    <div className="mb-12 relative">
      <div className="absolute w-4 h-4 bg-miduYellow rounded-full -left-[37px] top-1 border-2 border-darkBackground"></div>
      <Title level="h4" className="!text-xl font-semibold text-primaryText mb-1">
        {title}
      </Title>
      <Text className="text-lg text-miduYellow font-medium mb-1">{company}</Text>
      <Text className="text-sm text-gray-400 mb-3">{duration}</Text>
      <Text className="mb-4">{description}</Text>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline transition-colors">
          Saber más &gt;
        </a>
      )}
    </div>
  );
};

export default ExperienceItem;