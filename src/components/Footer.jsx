import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* About Us Section */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Learn more about our mission, values, and team.
            </Typography>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Link href="#" color="inherit" variant="body2" underline="none" display="block">
              Service 1
            </Link>
            <Link href="#" color="inherit" variant="body2" underline="none" display="block">
              Service 2
            </Link>
            <Link href="#" color="inherit" variant="body2" underline="none" display="block">
              Service 3
            </Link>
          </Grid>

          {/* Industries Section */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Industries
            </Typography>
            <Link href="#" color="inherit" variant="body2" underline="none" display="block">
              Industry 1
            </Link>
            <Link href="#" color="inherit" variant="body2" underline="none" display="block">
              Industry 2
            </Link>
            <Link href="#" color="inherit" variant="body2" underline="none" display="block">
              Industry 3
            </Link>
          </Grid>

          {/* Careers Section */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Careers
            </Typography>
            <Typography variant="body2">
              Join our team and start a rewarding career with us.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: contact@mywebsite.com</Typography>
            <Typography variant="body2">Phone: +1 234 567 890</Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} My Website. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
