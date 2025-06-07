'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

export default function LoadingWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div className="min-h-screen">
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
                    <LoadingSpinner />
                </div>
            )}
            {children}
        </div>
    );
}