import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroSection from '../components/Home/HeroSection'

function Home() {
  return (
    <>
    <HeroSection/>
    <Box>
      <Typography variant="h2">Welcome to TalentOrient</Typography>
      <Typography paragraph>
        TalentOrient is a pioneering staffing and HR solutions provider with a focus on the Aviation, Aerospace, and Defense industries.
      </Typography>
      {/* Add more content and images to match PDF's Home section */}
    </Box>
    </>
  );
}

export default Home;
