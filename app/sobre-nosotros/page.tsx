import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: `Conoce el propósito de ${siteConfig.name}: guías prácticas de tecnología, programación y herramientas digitales.`,
  alternates: {
    canonical: absoluteUrl("/sobre-nosotros"),
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Sobre nosotros" },
        ]}
      />

      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Sobre nosotros
      </h1>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          <strong className="font-medium text-zinc-900 dark:text-zinc-100">
            {siteConfig.name}
          </strong>{" "}
          es un blog enfocado en tutoriales claros, útiles y fáciles de seguir.
          Publicamos guías sobre Windows, programación, JavaScript, Next.js y
          herramientas digitales.
        </p>
        <p>
          El proyecto comienza como un MVP sencillo: contenido en Markdown,
          páginas estáticas y una base lista para SEO y monetización futura con
          publicidad, sin complejidad innecesaria.
        </p>
        <p>
          Si encuentras un error o quieres sugerir un tema, puedes escribirnos
          desde la página de contacto.
        </p>
      </div>
    </div>
  );
}
