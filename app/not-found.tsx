import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-start justify-center px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Página no encontrada
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        La ruta que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
