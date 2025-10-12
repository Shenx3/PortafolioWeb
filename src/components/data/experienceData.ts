
interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  link?: string;
}

export const experienceData: Experience[] = [
  {
    title: 'Operador de logística',
    company: 'Decathlon',
    duration: 'Septiembre 2023 - Febrero 2024',
    description: 'Team Player Logistica 40 HRS',
    link: 'https://decathlonchile.gupy.io/',
  },
  {
    title: 'Técnico de fibra óptica',
    company: 'Grupo Schutz S.A',
    duration: 'Mayo 2023 - Agosto 2023',
    description: 'Responsable de la instalación, mantenimiento y reparación de redes de fibra óptica. Realicé pruebas de rendimiento y diagnostiqué fallas para asegurar la continuidad del servicio y optimizar la calidad de las conexiones.',
  },
  {
    title: 'Garzón',
    company: 'La Sanguchera del Barrio',
    duration: 'Enero 2023 - Marzo 2023',
    description: 'Responsable de atender a los clientes de manera cordial y eficiente. Tomé pedidos, los procesé correctamente y me aseguré de que cada mesa tuviera una buena experiencia',
  },
];