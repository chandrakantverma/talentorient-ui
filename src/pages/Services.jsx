import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionTitle from '../components/SectionTitle';

function Services() {
  return (
    <Box>
      <SectionTitle title="Our Services" />
      <Typography paragraph>
        We offer a wide range of services including Recruitment, Staffing, Compliance Management, and Security Services.
      </Typography>
      {/* List each service from the PDF with a short description */}
    </Box>
  );
}

export default Services;
