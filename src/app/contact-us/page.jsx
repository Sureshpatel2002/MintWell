'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TextField, Button, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

// Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const CONTACTS = [
  {
    country: 'India',
    address: '1558, STREET NO. 29, BLOCK 39E, NAIWALA, KAROL BAGH, NEW DELHI-110005',
    phoneNumber: '+91 89056 38483 (WhatsApp)',
    email: 'Info@mintwellautotech.com',
    coordinates: { lat: 28.6519, lng: 77.2090 },
    icon: FaMapMarkerAlt
  },
  {
    country: 'Dubai',
    address: 'DUBAI, UAE (COMING SOON)',
    phoneNumber: '',
    email: '',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    icon: FaMapMarkerAlt
  }
];

export default function ContactUs() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [mapError, setMapError] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) {
      setMapError(true);
      return;
    }

    if (map || !window.google) return;

    try {
      const delhiLocation = CONTACTS[0].coordinates;
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: delhiLocation,
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }]
          }
        ]
      });

      CONTACTS.forEach(contact => {
        if (contact.coordinates) {
          new window.google.maps.Marker({
            position: contact.coordinates,
            map: newMap,
            title: contact.country,
            animation: window.google.maps.Animation.DROP
          });
        }
      });

      setMap(newMap);
    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError(true);
    }
  }, [map]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`}
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Get in Touch
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CONTACTS.map((contact, index) => (
                  <motion.div
                    key={contact.country}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-semibold">{contact.country}</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-white/90 flex items-center gap-3">
                        <FaMapMarkerAlt className="w-5 h-5" />
                        {contact.address}
                      </p>
                      {contact.phoneNumber && (
                        <p className="text-white/90 flex items-center gap-3">
                          <FaWhatsapp className="w-5 h-5" />
                          {contact.phoneNumber}
                        </p>
                      )}
                      {contact.email && (
                        <p className="text-white/90 flex items-center gap-3">
                          <FaEnvelope className="w-5 h-5" />
                          {contact.email}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Name"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      className="bg-gray-50 rounded-lg"
                      InputProps={{
                        className: "rounded-lg"
                      }}
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      className="bg-gray-50 rounded-lg"
                      InputProps={{
                        className: "rounded-lg"
                      }}
                    />
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                      className="bg-gray-50 rounded-lg"
                      InputProps={{
                        className: "rounded-lg"
                      }}
                    />
                  )}
                />

                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={4}
                      label="Message"
                      error={!!errors.message}
                      helperText={errors.message?.message}
                      className="bg-gray-50 rounded-lg"
                      InputProps={{
                        className: "rounded-lg"
                      }}
                    />
                  )}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {mapError ? (
                <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                  <p className="text-gray-500">Map is currently unavailable</p>
                </div>
              ) : (
                <div
                  ref={mapRef}
                  className="w-full h-full rounded-2xl overflow-hidden"
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 