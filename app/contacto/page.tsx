import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta con el equipo de ${siteConfig.name} para sugerencias, correcciones o colaboraciones.`,
  alternates: {
    canonical: absoluteUrl("/contacto"),
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
      />

      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contacto
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        ¿Tienes una sugerencia, encontraste un error o quieres proponer un
        tutorial? Escríbenos.
      </p>

      <form
        className="mt-8 space-y-5"
        action="mailto:hola@whoami.dev"
        method="post"
        encType="text/plain"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-sky-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-sky-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-sky-500 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
          />
        </div>

        <button
          type="submit"
          className="inline-flex rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          Enviar mensaje
        </button>
      </form>

      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        Este formulario abre tu cliente de correo. Más adelante se podrá
        conectar a un servicio de envío sin necesidad de backend propio.
      </p>
    </div>
  );
}
