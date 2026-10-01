export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  highlights: string[];
  tags: string[];
  visual: "booking" | "portfolio";
  repositoryUrl: string;
  secondaryAction: {
    label: string;
    href: string;
  };
};

export const projects: Project[] = [
  {
    title: "UBIK",
    eyebrow: "Plataforma de reservas · Proyecto destacado",
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
    visual: "booking",
    repositoryUrl: "https://github.com/Juankos0714/Ubik-App",
    secondaryAction: {
      label: "Ver arquitectura",
      href: "#ubik-arquitectura",
    },
  },
  {
    title: "Mi portafolio",
    eyebrow: "Diseño y desarrollo · Proyecto personal",
    summary:
      "Un espacio propio para contar cómo trabajo y mostrar mis proyectos. Construido con React y Next.js, con una experiencia visual cuidada, animaciones accesibles y contenido organizado para crecer.",
    highlights: [
      "Interfaz responsive con componentes reutilizables.",
      "Animaciones con Framer Motion y soporte para movimiento reducido.",
      "Secciones de experiencia, habilidades y contacto en una sola experiencia.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    visual: "portfolio",
    repositoryUrl: "https://github.com/Nicolasld222/Portafolio-Web",
    secondaryAction: {
      label: "Ver este portafolio",
      href: "#inicio",
    },
  },
];
