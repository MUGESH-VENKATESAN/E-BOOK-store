import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

const ContactPage = () => {
  return (
    <Container style={containerStyle}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Contact Us</h2>

      <div style={{ marginBottom: '20px' }}>
        <Typography variant="h5" style={{ marginBottom: '10px' }}>Main Office</Typography>
        <Typography variant="body1">
          Address: 123 Main Street, Cityville, Country
          <br />
          Email: office1@example.com
          <br />
          Phone: +91 9876645887
        </Typography>
      </div>

      <Divider style={{ backgroundColor: '#000', marginBottom: '20px' }} />

      <div>
        <Typography variant="h5" style={{ marginBottom: '10px' }}>Branch Near You</Typography>
        <Typography variant="body1">
          Address: 456 Business Avenue, Townsville, Country
          <br />
          Email: office2@example.com
          <br />
          Phone: +91 9567842356
        </Typography>
      </div>
    </Container>
  );
};

const containerStyle = {
  marginTop: '20px',
  color: '#000', // Text color changed to black
  backgroundImage: 'url("https://png.pngtree.com/background/20210709/original/pngtree-open-book-background-picture-image_580860.jpg")', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh', // Ensures that the background covers the entire viewport height
};

export default ContactPage;
