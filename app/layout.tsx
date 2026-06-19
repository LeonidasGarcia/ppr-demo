import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PPR Demo — Next.js 16",
  description: "Ejemplo de Partial Prerendering en Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <header className="border-b border-gray-200">
          <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-3 text-sm text-gray-500">
            <span className="rounded bg-gray-100 px-2 py-0.5 font-medium text-gray-700">
              PPR Demo
            </span>
            <span>Next.js 16 + cacheComponents</span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 py-4 text-center text-xs text-gray-400">
          Esta página usa Partial Prerendering — el shell es estático, las
          tarjetas se stremean con {"<Suspense>"}
        </footer>
      </body>
    </html>
  );
}
