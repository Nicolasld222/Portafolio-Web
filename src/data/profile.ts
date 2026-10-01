export type SocialLink = {
  label: string;
  url: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  details: string[];
};

export const profile = {
  name: "Nicolás Londoño Díaz",
  initials: "NL",
  role: "Software Developer · Backend & Full Stack",
  location: "Armenia, Colombia",
  email: "nicolaslondia@gmail.com",
  phone: "+57 323 406 2814",
  availability: "Disponible para aprender, colaborar y construir",

  intro:
    "Desarrollador de software con mentalidad de producto: convierto necesidades reales en aplicaciones claras, APIs confiables y sistemas preparados para crecer.",

  bio: [
    "Soy desarrollador de software enfocado en backend y productos full stack. Me gusta transformar problemas complejos en sistemas claros, seguros y mantenibles.",
    "Trabajo desde el diseño de la base de datos hasta la API y la interfaz. Hoy profundizo en infraestructura, desarrollo seguro y ciberseguridad para construir software que resista el mundo real.",
  ],

  skillGroups: [
    {
      label: "Backend & arquitectura",
      description: "Servicios desacoplados, reglas de negocio claras y APIs pensadas para evolucionar.",
      items: ["PHP", "Laravel", "Java", "Spring Boot", "REST APIs", "JWT", "Microservicios", "Postman"],
    },
    {
      label: "Frontend",
      description: "Interfaces funcionales y cuidadas para completar la experiencia de producto.",
      items: ["React", "Angular", "AngularJS", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      label: "Datos & plataforma",
      description: "Persistencia, despliegue y operación con una mirada práctica de punta a punta.",
      items: ["PostgreSQL", "MySQL", "SQL Server", "Docker", "Linux", "Azure", "APIs", "Ciberseguridad"],
    },
  ],

  principles: [
    "Diseñar antes de complicar",
    "Documentar para colaborar mejor",
    "Seguridad desde el inicio",
  ],

  currentlyLearning: ["Secure Software Development", "Ethical Hacking", "Cloud & infrastructure"],

  experience: [
    {
      period: "Abril 2026 — Actualidad",
      title: "Desarrollador web · Área administrativa",
      organization: "Colchones Happy Sleep",
      description: "Desarrollo y mantengo soluciones web para apoyar procesos administrativos y mejorar la operación del negocio.",
      details: [
        "Construcción y evolución de funcionalidades web orientadas a necesidades internas.",
        "Análisis de requerimientos, resolución de problemas y mejora continua de procesos.",
        "Trabajo con una mirada práctica sobre datos, mantenimiento y experiencia de usuario.",
      ],
    },
  ] satisfies TimelineItem[],

  education: [
    {
      period: "Julio 2024 — Actualidad",
      title: "Tecnólogo en Análisis y Desarrollo de Software",
      organization: "SENA · Centro de Comercio y Turismo",
      description: "Formación en desarrollo de software, bases de datos, desarrollo web, APIs y fundamentos de ingeniería.",
      details: ["Programación orientada a objetos", "Bases de datos y SQL", "Diseño y desarrollo de aplicaciones"],
    },
    {
      period: "Enero 2010 — Diciembre 2022",
      title: "Bachillerato / Educación media",
      organization: "CASD Armenia",
      description: "Formación media con bases para continuar el camino profesional en tecnología.",
      details: [],
    },
  ] satisfies TimelineItem[],

  languages: [
    { name: "Español", level: "Nativo", value: 100 },
    { name: "Inglés", level: "Básico B2", value: 25 },
  ],

  links: [
    { label: "GitHub", url: "https://github.com/Nicolasld222" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nicolas-londo%C3%B1o-diaz-a3a051269/",
    },
    { label: "Instagram", url: "https://instagram.com/n.l.d_10" },
  ] satisfies SocialLink[],
};
