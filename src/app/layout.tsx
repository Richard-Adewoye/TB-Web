// src/app/layout.tsx
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const serif = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] });
const sans = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TB Website',
  description: 'Expert marriage counseling & coaching',
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.className}`}>
      <body className="bg-[#1A1612] text-white">{children}</body>
    </html>
  );
}
