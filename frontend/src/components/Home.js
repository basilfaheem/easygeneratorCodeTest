import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Sets the height of the box to fill the entire viewport
      }}
    >
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          "Welcome to the application."
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
