import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-[#FABF13]">404</p>
      <h1 className="mt-4 text-5xl font-black uppercase text-white">Page not found</h1>
      <p className="mt-4 max-w-md text-white/92">The signal got lost. Return to the main festival landing page.</p>
      <Link href="/" className="mt-8 rounded-none bg-[#FABF13] px-5 py-3 text-base font-semibold uppercase tracking-[0.16em] text-black">Go home</Link>
    </div>
  );
}
