export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "UBIK",
    eyebrow: "Plataforma de reservas · Caso destacado",
    summary:
      "Una plataforma full stack para descubrir moteles, gestionar habitaciones y centralizar reservas. Diseñada como un conjunto de servicios independientes que puede crecer sin perder claridad.",
    highlights: [
      "Autenticación JWT centralizada a través de un API Gateway.",
      "Servicios para usuarios, moteles y habitaciones, notificaciones y pagos.",
      "Arquitectura hexagonal —puertos y adaptadores— para aislar la lógica de negocio de la infraestructura.",
      "Gestión de imágenes con Cloudinary; servicios contenerizados con Docker y desplegados en Azure.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Tailwind CSS",
      "JWT",
      "Microservicios",
      "Docker",
      "Azure",
    ],
  },
];
