// HeroSection.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        boxShadow:1,
        borderRadius:1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        px: 2,
        p:2
      }}
    >
      <Container maxWidth="md">
        {/* Headline */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Empowering HR Excellence
        </Typography>

        {/* Subheadline */}
        <Typography variant="h6" component="p" gutterBottom sx={{ mb: 4 }}>
          Streamline your HR processes with an all-in-one management platform. Handle payroll, recruitment, and performance in one place.
        </Typography>

        {/* Call to Action (CTA) */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
