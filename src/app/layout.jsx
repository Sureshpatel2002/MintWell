import { Inter } from 'next/font/google';
import { LoadingProvider } from '../components/providers/LoadingProvider';
import ClientLayout from '../components/ClientLayout';
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
          <ClientLayout>
            {children}
          </ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
} 