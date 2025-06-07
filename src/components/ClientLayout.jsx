'use client';

import { useLoading } from './providers/LoadingProvider';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  const { isLoading } = useLoading();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {!isLoading && <Footer />}
    </div>
  );
} 