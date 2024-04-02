// Sample.js
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography, Card, CardMedia } from '@mui/material';

const Sample = () => {
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);

  const bookDetails = {
    title: 'Sample Book',
    author: 'John Doe',
    price: '$19.99',
    imageUrl: 'https://www.googleapis.com/books/v1/volumes?q=${searchQuery}',
    paymentFormImageUrl: 'https://www.googleapis.com/books/v1/volumes?q=${searchQuery}', // Separate image for payment form
  };

  const offerDetails = {
    discount: '10%',
    freeShipping: true,
  };

  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Processing payment...');
    // You may want to redirect the user to a payment gateway or show a payment form
    // Set isPaymentFormOpen to false if payment is successful
    // For demo purposes, we'll just log a message
  };

  return (
    <div>
      <Card>
        <CardMedia component="img" height="300" image={bookDetails.imageUrl} alt={bookDetails.title} />
      </Card>
      <center>
        <h1>SRM BOOK-STORE</h1>
        <Typography variant="subtitle1">Author: {bookDetails.author}</Typography>
        <Typography variant="subtitle1">Price: {bookDetails.price}</Typography>

        <Button variant="contained" color="primary" onClick={() => setIsPaymentFormOpen(true)}>
          Proceed to Payment
        </Button>
      </center>

      {/* Payment Form */}
      <Dialog open={isPaymentFormOpen} onClose={() => setIsPaymentFormOpen(false)}>
        <DialogTitle>Payment Details</DialogTitle>
        <DialogContent>
          <Card>
            <CardMedia component="img" height="200" image={bookDetails.paymentFormImageUrl} alt={bookDetails.title} />
          </Card>
          <Typography variant="h6">Book Details</Typography>
          <Typography variant="subtitle1">Title: {bookDetails.title}</Typography>
          <Typography variant="subtitle1">Author: {bookDetails.author}</Typography>
          <Typography variant="subtitle1">Price: {bookDetails.price}</Typography>

          <Typography variant="h6">Offers</Typography>
          <Typography>
            {offerDetails.discount && `Discount: ${offerDetails.discount}`}
          </Typography>
          <Typography>
            {offerDetails.freeShipping && 'Free Shipping Available'}
          </Typography>

          <TextField label="Card Number" fullWidth margin="normal" />
          <TextField label="Expiration Date" fullWidth margin="normal" />
          <TextField label="CVV" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsPaymentFormOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePayment} color="primary">
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sample;
