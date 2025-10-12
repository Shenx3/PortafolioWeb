import React from 'react';
import LinkButton from '../atoms/LinkButton';

export const HeroButtons: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-6 justify-center">
      <LinkButton to="mailto:bastianbravotobar@gmail.com" icon="email" variant="primary">
        Contáctame
      </LinkButton>
      <LinkButton to="https://www.linkedin.com/in/bastian-bravo-17b131370/" icon="linkedin" variant="secondary">
        LinkedIn
      </LinkButton>
    </div>
  );
};

export default HeroButtons;

