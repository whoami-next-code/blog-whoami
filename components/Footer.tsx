import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { categories } from "@/lib/categories";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Guías prácticas sobre tecnología, programación y herramientas
            digitales. Contenido claro, útil y fácil de aplicar.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
            Navegación
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/sobre-nosotros">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" href="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
            Categorías
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  href={`/categoria/${category.slug}`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 px-4 py-5 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {year} {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
