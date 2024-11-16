import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import SectionTitle from '../components/SectionTitle';

function Contact() {
  return (
    <>
    
    <Box>
    <SectionTitle title="Contact Us" />
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary">Send</Button>
      </form>
      <Box mt={3}>
        <Typography variant="body1">Address: Nitin International Business Centre, Malviya Nagar, New Delhi - 110017</Typography>
        <Typography variant="body1">Phone: +91 7303122649</Typography>
      </Box>
    </Box>
    </>
  );
}

export default Contact;
