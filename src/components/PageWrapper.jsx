'use client';

import { useLoading } from './providers/LoadingProvider';
import LoadingSpinner from './LoadingSpinner';

export default function PageWrapper({ children }) {
  const { isLoading } = useLoading();

  return (
    <div className="relative">
      {isLoading ? (
        <div className="min-h-[calc(100vh-160px)] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        children
      )}
    </div>
  );
} 