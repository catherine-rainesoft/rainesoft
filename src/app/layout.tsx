import './globals.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Rainesoft',
  description: 'A modern blog and services site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-nunito scroll-smooth">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
