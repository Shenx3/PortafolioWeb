interface Project { // Definimos la interfaz Project
  imageSrc: string; // Ruta de la imagen
  title: string; // Título del proyecto
  description: string; // Descripción del proyecto
  tags: string[]; // Etiquetas del proyecto
  codeLink?: string; // Enlace al código del proyecto (opcional)
  previewLink?: string;
}

export const projectsData: Project[] = [ // Exportamos un array de proyectos
  { // Primer proyecto
    imageSrc: 'src/assets/GameZone.png', // Ruta de la imagen
    title: 'Gamezone - Tienda Digital de Videojuegos', // Título del proyecto
    description: 'GameZone es una tienda en línea de videojuegos que ofrece una variedad de títulos para consolas y PC.', // Descripción del proyecto
    tags: ['HTML5', 'CSS', 'JavaScript'], // Etiquetas del proyecto
    codeLink: 'https://github.com/BastianEd/Web_GameZon_Evaluacion_Uno', // Enlace al código del proyecto (opcional)
    previewLink: 'https://gamezone-store.netlify.app/', // Enlace de vista previa del proyecto (opcional)
  },
  { // Segundo proyecto
    imageSrc: 'src/assets/Pasteleria.png',
    title: 'Pastelería - Delicias al alcance de un clic',
    description: 'Tienda en línea de pasteles y postres personalizados. Realiza tu pedido y recíbelo en la puerta de tu casa.',
    tags: ['HTML5', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/BastianEd/MilSaboresDulces',
    previewLink: 'https://pasteleriamilsabores.netlify.app/',
  },
];