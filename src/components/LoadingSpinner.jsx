'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-white/90 shadow-lg">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      <p className="mt-3 text-primary-600 font-medium text-sm">Loading...</p>
    </div>
  );
} 