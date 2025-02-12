import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'ToDo App for Veel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body className="bg-gray-700">
        <div className="max-w-2xl mx-auto py-12 px-5">
          <h1 className="text-slate-100 text-6xl font-bold text-center mb-[40px]">
            Todo App
          </h1>

          {children}
        </div>
      </body>
    </html>
  );
}
