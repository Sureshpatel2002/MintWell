'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '16px'
  };

  const center = {
    lat: 28.6517, // Approximate coordinates for Karol Bagh
    lng: 77.2219
  };

  return (
    <Container maxWidth="lg" className="py-16 sm:py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8"
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>

        <Grid container spacing={4} className="mt-8">
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  className="bg-gray-50"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  className="bg-gray-50"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  className="bg-gray-50"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  className="bg-gray-50"
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </Grid>

          {/* Map and Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full flex flex-col space-y-6"
            >
              {/* Map */}
              <div className="h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <Typography variant="h6" className="font-semibold mb-4">
                  Contact Information
                </Typography>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon icon="mdi:map-marker" className="text-blue-600 text-xl mt-1" />
                    <div>
                      <Typography variant="body1" className="font-medium">
                        Address
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        1558, STREET NO. 29, BLOCK 39E,<br />
                        NAIWALA, KAROL BAGH,<br />
                        NEW DELHI-110005
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon icon="mdi:phone" className="text-blue-600 text-xl mt-1" />
                    <div>
                      <Typography variant="body1" className="font-medium">
                        Phone
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        +91 1234567890
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon icon="mdi:email" className="text-blue-600 text-xl mt-1" />
                    <div>
                      <Typography variant="body1" className="font-medium">
                        Email
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        info@mintwell.com
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ContactPage; 