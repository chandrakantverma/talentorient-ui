import React from 'react';
import { Typography } from '@mui/material';

function SectionTitle({ title }) {
  return (
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
  );
}

export default SectionTitle;
