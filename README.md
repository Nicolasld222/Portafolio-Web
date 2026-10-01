# Portafolio — Next.js + TypeScript + Tailwind + Framer Motion

Base de portafolio con estética minimalista tipo Apple: mucho espacio en blanco,
tipografía grande, paleta neutra con un acento, animaciones discretas y proyectos
presentados como producto (resumen → aspectos técnicos → tecnologías).

## 1. Instalar y correr en local

Necesitas [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## 2. Qué editar primero

Todo el contenido vive en dos archivos, no necesitas tocar los componentes:

- **`src/data/profile.ts`** → tu nombre, iniciales, bio, habilidades, correo y enlaces (GitHub, LinkedIn, etc.)
- **`src/data/projects.ts`** → tus proyectos, sus tecnologías y enlaces de GitHub.
  Las vistas previas de UBIK y del portafolio se construyen con componentes React.

Si quieres cambiar el color de acento (el azul), edítalo en **`tailwind.config.ts`**,
en `theme.extend.colors.accent`.

## 3. Estructura del proyecto

```
src/
  app/
    layout.tsx      → fuente, metadata y <html>/<body>
    page.tsx         → arma todas las secciones en orden
    globals.css      → Tailwind + accesibilidad (focus, reduced motion)
    icon.svg          → favicon
  components/
    Nav.tsx           → barra superior fija con blur al hacer scroll
    Hero.tsx          → sección de apertura (fondo oscuro, animación de entrada)
    Reveal.tsx        → wrapper reutilizable para animación al hacer scroll
    Projects.tsx       → recorre src/data/projects.ts
    ProjectCard.tsx     → tarjeta de un proyecto
    ProjectVisual.tsx   → vistas previas ilustradas para cada proyecto
    About.tsx           → bio + habilidades
    Contact.tsx         → CTA de correo + enlaces
    Footer.tsx          → pie de página
  data/
    profile.ts          → tu información personal
    projects.ts          → tus proyectos
```

## 4. Agregar foto real (opcional)

Ahora mismo "Sobre mí" usa un círculo con tus iniciales en vez de una foto, para no
depender de ninguna imagen externa. Si quieres usar una foto:

1. Guárdala en `public/foto.jpg`
2. En `src/components/About.tsx`, reemplaza el `<div>` de iniciales por:

```tsx
import Image from "next/image";
// ...
<Image
  src="/foto.jpg"
  alt={profile.name}
  width={200}
  height={200}
  className="rounded-full object-cover"
/>
```

## 5. Desplegar en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com), importa el repositorio.
3. Vercel detecta Next.js automáticamente — no necesitas configurar nada más.
4. Cada vez que hagas `git push`, Vercel vuelve a desplegar el sitio.

## Notas

- El modo oscuro se activa solo, según la preferencia del sistema del visitante
  (usa `darkMode: "media"` de Tailwind).
- Las animaciones respetan `prefers-reduced-motion`.
- No hay dependencias de imágenes externas ni APIs de terceros: todo el diseño
  (incluido el mockup de cada proyecto) se genera con CSS.
