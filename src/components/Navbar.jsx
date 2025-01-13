import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx={{ 
          backgroundColor: '#1e3a8a', // Dark blue
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Toolbar>
          {/* Brand Name */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold', 
              letterSpacing: '1px' 
            }}
          >
            Product App
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              component={Link} 
              to="/" 
              sx={{
                color: 'white', 
                textTransform: 'none', 
                fontSize: '16px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
              }}
            >
              Home
            </Button>

            <Button 
              component={Link} 
              to="/addprods" 
              sx={{
                color: 'white', 
                textTransform: 'none', 
                fontSize: '16px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
              }}
            >
              Add Product
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
