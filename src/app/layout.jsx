import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import ScrollProgressBar from '../components/ScrollProgressBar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mintwell Autotech Exports Pvt Ltd',
  description: 'Your trusted partner in automotive excellence',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgressBar />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 