import { Inter } from 'next/font/google';
import './globals.css';
import { LoadingProvider } from '../components/providers/LoadingProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MintWell Autotech',
  description: 'Your trusted partner in automotive parts distribution',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          <Navbar />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
} 