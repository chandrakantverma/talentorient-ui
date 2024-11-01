// CarouselSection.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardContent } from '@mui/material';

// Import slick-carousel CSS for default styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const slides = [
    {
      title: 'Employee Management',
      description: 'Manage employee records, roles, and departments all in one place.',
    },
    {
      title: 'Performance Tracking',
      description: 'Evaluate and track employee performance effortlessly.',
    },
    {
      title: 'Payroll Integration',
      description: 'Automate payroll processing with accuracy and efficiency.',
    },
    {
      title: 'Attendance & Leave Management',
      description: 'Track attendance and manage leave requests easily.',
    },
  ];

  return (
    <Box sx={{ my: 5, px: 2 }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Card key={index} sx={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey.200' }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {slide.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselSection;
