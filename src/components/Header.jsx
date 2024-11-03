import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
        <Box sx={{bgcolor:'#00547A'}}>
      <Toolbar>
        
        <Typography variant="h3" style={{ flexGrow: 1 }}>
          TalentOrient Pvt. Ltd.
        </Typography>

        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/services">Services</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        
      </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Header;
