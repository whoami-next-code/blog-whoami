import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    name: "Windows",
    slug: "windows",
    description:
      "Tutoriales y soluciones prácticas para Windows 10 y Windows 11.",
  },
  {
    name: "Programación",
    slug: "programacion",
    description:
      "Guías para empezar a programar y mejorar tus habilidades de desarrollo.",
  },
  {
    name: "Next.js",
    slug: "nextjs",
    description:
      "Cómo construir aplicaciones web modernas con Next.js y React.",
  },
  {
    name: "JavaScript",
    slug: "javascript",
    description:
      "Conceptos, herramientas y buenas prácticas del ecosistema JavaScript.",
  },
  {
    name: "Herramientas",
    slug: "herramientas",
    description:
      "Utilidades digitales que aceleran tu flujo de trabajo diario.",
  },
  {
    name: "Tecnología",
    slug: "tecnologia",
    description:
      "Noticias, conceptos y tendencias del mundo tecnológico.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryByName(name: string): Category | undefined {
  return categories.find(
    (category) => category.name.toLowerCase() === name.toLowerCase(),
  );
}

export function categoryNameToSlug(name: string): string {
  const found = getCategoryByName(name);
  if (found) return found.slug;

  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
