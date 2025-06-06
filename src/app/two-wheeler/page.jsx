'use client';

import Image from 'next/image';

const twoWheelers = [
  {
    id: 1,
    name: "Honda Activa 6G",
    price: "₹75,000",
    image: "/dummy-bike1.jpg",
    features: ["110cc Engine", "60 kmpl Mileage", "Digital Speedometer", "LED Headlight"]
  },
  {
    id: 2,
    name: "TVS Jupiter",
    price: "₹70,000",
    image: "/dummy-bike2.jpg",
    features: ["110cc Engine", "55 kmpl Mileage", "Digital Console", "External Fuel Filler"]
  },
  {
    id: 3,
    name: "Bajaj Pulsar 150",
    price: "₹1,20,000",
    image: "/dummy-bike3.jpg",
    features: ["150cc Engine", "45 kmpl Mileage", "Digital Instrument Cluster", "LED DRLs"]
  }
];

export default function TwoWheelerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Two-Wheeler Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {twoWheelers.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{vehicle.name}</h2>
                <p className="text-xl font-bold text-primary-600 mb-4">{vehicle.price}</p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 