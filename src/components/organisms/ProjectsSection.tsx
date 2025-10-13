// ProjectsSection es una sección que muestra una lista de proyectos utilizando datos importados.
// Cada proyecto se representa con el componente ProjectCard.
// Utiliza componentes atómicos para la estructura y el estilo.
import React from 'react';
import Title from '../atoms/Title';
import ProjectCard from '../molecules/ProjectCard';
import { projectsData } from '../data/projectsData'; // Importación corregida

const ProjectsSection: React.FC = () => {
  return (
    <section id="proyectos" className="py-16 md:py-20">
      <Title level="h2" className="text-left flex items-center mb-8">
        <svg className="w-8 h-8 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        Proyectos
      </Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;