// HeroButtons contiene botones de llamada a la acción para contactar y visitar LinkedIn.
// Utiliza el componente LinkButton para estilizar los botones con iconos y enlaces.
import React from 'react';
import LinkButton from '../atoms/LinkButton';

export const HeroButtons: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-6 justify-center">
      <LinkButton to="mailto:bastianbravotobar@gmail.com" icon="email" variant="primary">
        Contáctame
      </LinkButton>
      <LinkButton to = "https://github.com/Shenx3" icon="github" variant="yellow">
        GitHub
      </LinkButton>
      <LinkButton to="https://www.linkedin.com/in/bastian-bravo-17b131370/" icon="linkedin" variant="secondary">
        LinkedIn
      </LinkButton>
    </div>
  );
};

export default HeroButtons;

