import { Inter } from 'next/font/google';
import { LoadingProvider } from '../components/providers/LoadingProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MintWell Autotech',
  description: 'Your trusted partner in automotive solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
} 