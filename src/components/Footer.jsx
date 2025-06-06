import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
    { title: 'About Us', href: '/about-us' },
    { title: 'Catalogues', href: '/catalogues' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Contact', href: '/contact-us' },
];

const contact = {
    address: 'Plot-473, Udyog Vihar, Phase-lll, Sec.-20, Gurgaon, Haryana 122016',
    email: 'info@mintwellautotech.com',
    phone: '01243628649',
};

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-12 pb-4 mt-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-start">
                    <Image
                        src="/logo-white.png"
                        alt="MintWell Autotech"
                        width={260}
                        height={60}
                        className="mb-4 h-20 w-auto object-contain"
                    />
                    <p className="text-gray-400 text-sm max-w-xs">
                        MintWell Autotech is a leading exporter of high-quality motorcycle & three-wheeler spare parts and accessories, serving 28+ countries with a commitment to quality and reliability.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href} className="hover:text-primary-400 transition-colors duration-200">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <span className="block text-gray-400">Address:</span>
                            <span>{contact.address}</span>
                        </li>
                        <li>
                            <span className="block text-gray-400">Email:</span>
                            <a href={`mailto:${contact.email}`} className="hover:text-primary-400 transition-colors duration-200">
                                {contact.email}
                            </a>
                        </li>
                        <li>
                            <span className="block text-gray-400">Phone:</span>
                            <a href={`tel:${contact.phone}`} className="hover:text-primary-400 transition-colors duration-200">
                                {contact.phone}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Copyright */}
            <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} MintWell Autotech Exports Pvt Ltd. All rights reserved.
            </div>
        </footer>
    );
} 