export type SocialLink = {
  label: string;
  url: string;
};

export const profile = {
  name: "Nicolás Londoño",
  initials: "NL",
  role: "Software Developer · Backend & Full Stack",
  location: "Colombia",
  availability: "Abierto a construir productos con equipos ambiciosos",

  bio: [
    "Soy desarrollador de software enfocado en backend y productos full stack. Me gusta transformar problemas complejos en sistemas claros, seguros y mantenibles.",
    "Trabajo desde el diseño de la base de datos hasta la API y la interfaz. Hoy profundizo en infraestructura, desarrollo seguro y ciberseguridad para construir software que resista el mundo real.",
  ],

  skillGroups: [
    {
      label: "Backend & arquitectura",
      description: "Servicios desacoplados, reglas de negocio claras y APIs pensadas para evolucionar.",
      items: ["PHP", "Laravel", "Java", "Spring Boot", "REST APIs", "JWT", "Microservicios"],
    },
    {
      label: "Frontend",
      description: "Interfaces funcionales y cuidadas para completar la experiencia de producto.",
      items: ["React", "Angular", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      label: "Datos & plataforma",
      description: "Persistencia, despliegue y operación con una mirada práctica de punta a punta.",
      items: ["PostgreSQL", "MySQL", "SQL Server", "Docker", "Linux", "Azure"],
    },
  ],

  principles: [
    "Diseñar antes de complicar",
    "Documentar para colaborar mejor",
    "Seguridad desde el inicio",
  ],

  currentlyLearning: ["Secure Software Development", "Ethical Hacking", "Cloud & infrastructure"],

  links: [
    { label: "GitHub", url: "https://github.com/Nicolasld222" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nicolas-londo%C3%B1o-diaz-a3a051269/",
    },
    { label: "Instagram", url: "https://instagram.com/n.l.d_10" },
  ] satisfies SocialLink[],
};
