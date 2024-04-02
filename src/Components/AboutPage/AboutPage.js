import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutPage = () => {
  return (
    <Container style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h2" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000' }}>SRM E-BOOK</Typography>
      </div>

      <Typography variant="body1" style={{ color: '#000' }}>
        Welcome to Your E-Book Store, where the world of literature meets the convenience of the digital age. We are passionate about bringing the joy of reading to your fingertips. Explore our vast collection of e-books spanning various genres, from timeless classics to contemporary bestsellers. Our user-friendly platform offers a seamless and enjoyable shopping experience, allowing you to discover, purchase, and enjoy your favorite books with just a few clicks. Dive into a virtual library that caters to every taste and preference. At Your E-Book Store, we believe in the power of knowledge and the endless possibilities that a good book can unlock. Join us in the journey of literary exploration and elevate your reading experience.
      </Typography>
    </Container>
  );
};

const containerStyle = {
  marginTop: '20px',
  backgroundImage: 'url("https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D")', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh', // Ensures that the background covers the entire viewport height
};

export default AboutPage;
