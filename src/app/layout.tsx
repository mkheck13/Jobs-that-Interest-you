import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Top Job Choices',
  description: 'Showcasing the top five companies I want to work for',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
