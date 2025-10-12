interface Experience { // Definimos la interfaz Experience
  title: string; // Título del puesto
  company: string; // Nombre de la empresa
  duration: string; // Duración del empleo
  description: string; // Descripción del puesto
  link?: string; // Enlace a la empresa o proyecto (opcional)
}

export const experienceData: Experience[] = [ // Exportamos un array de experiencias
  { // Primera experiencia
    title: 'Operador de logística', // Título del puesto
    company: 'Decathlon', // Nombre de la empresa
    duration: 'Septiembre 2023 - Febrero 2024', // Duración del empleo
    description: 'Team Player Logistica 40 HRS', // Descripción del puesto
    link: 'https://decathlonchile.gupy.io/', // Enlace a la empresa o proyecto (opcional)
  },
  { // Segunda experiencia
    title: 'Técnico de fibra óptica',
    company: 'Grupo Schutz S.A',
    duration: 'Mayo 2023 - Agosto 2023',
    description: 'Responsable de la instalación, mantenimiento y reparación de redes de fibra óptica. Realicé pruebas de rendimiento y diagnostiqué fallas para asegurar la continuidad del servicio y optimizar la calidad de las conexiones.',
  },
  { // Tercera experiencia
    title: 'Garzón',
    company: 'La Sanguchera del Barrio',
    duration: 'Enero 2023 - Marzo 2023',
    description: 'Responsable de atender a los clientes de manera cordial y eficiente. Tomé pedidos, los procesé correctamente y me aseguré de que cada mesa tuviera una buena experiencia',
  },
];