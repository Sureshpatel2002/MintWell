'use client';

import PageWrapper from '../../components/PageWrapper';
import AboutUsSection from '../../components/AboutUsSection';
import { Box, Container, Typography, Grid } from '@mui/material';

export default function AboutUs() {
  return (
    <PageWrapper>
      <div className="pt-20">
        <AboutUsSection />
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
            About MintWell
          </Typography>
          
          <Grid container spacing={6} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Our Story
              </Typography>
              <Typography paragraph>
                MintWell was founded with a vision to provide exceptional two-wheeler services
                to our customers. With years of experience in the industry, we have built a
                reputation for quality, reliability, and customer satisfaction.
              </Typography>
              <Typography paragraph>
                Our team of skilled professionals is dedicated to ensuring that your
                two-wheeler receives the best care possible. We use state-of-the-art
                equipment and follow industry best practices to deliver outstanding results.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/about-image.jpg"
                alt="About MintWell"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              To be the most trusted name in two-wheeler services by providing exceptional
              quality, outstanding customer service, and innovative solutions that exceed
              our customers' expectations.
            </Typography>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
              Our Values
            </Typography>
            <Grid container spacing={3}>
              {[
                {
                  title: 'Quality',
                  description: 'We are committed to delivering the highest quality service.',
                },
                {
                  title: 'Integrity',
                  description: 'We conduct our business with honesty and transparency.',
                },
                {
                  title: 'Innovation',
                  description: 'We continuously strive to improve and innovate.',
                },
                {
                  title: 'Customer Focus',
                  description: 'Our customers are at the heart of everything we do.',
                },
              ].map((value, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      boxShadow: 1,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {value.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </PageWrapper>
  );
} 