import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        py: 2,
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">© 2020 TalentOrient. All rights reserved.</Typography>
      <Typography variant="body2">Contact: +91 7303122649 | info@talentorient.com</Typography>
    </Box>
  );
}

export default Footer;
