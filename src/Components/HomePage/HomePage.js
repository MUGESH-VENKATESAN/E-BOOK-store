import React,{useState}from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: '$14.99',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBU2nvbkFHxY5iUwUhoXvTRpBLZXO2xUsgag&usqp=CAU',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: '$13.99',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlqXLYO3Wkv84uIgYsqJCBiaRfES71dkCrg&usqp=CAU',
  },
  {
    id: 3,
    title: 'React',
    author: 'George Orwell',
    price: '$12.99',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698914043i/201319987.jpg',
  },
  {
    id: 4,
    title: 'Python Programming',
    author: 'J.D. Salinger',
    price: '$12.99',
    imageUrl: 'https://m.media-amazon.com/images/I/419zUFm+c0L.jpg',
  },
  {
    id: 5,
    title: 'Horrors of the Earth',
    author: 'Jane Austen',
    price: '$11.99',
    imageUrl: 'https://m.media-amazon.com/images/I/51HmDzZYODS.jpg',
  },
  {
    id: 6,
    title: 'Wings Of Fire',
    author: 'Harper Lee',
    price: '$13.99',
    imageUrl: 'https://i.pinimg.com/474x/14/4e/47/144e47c797f89aa47bfb65e0eab7bba3.jpg',
  },
  {
    id: 7,
    title: 'A History Of Violence',
    author: 'J.R.R. Tolkien',
    price: '$13.99',
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/81SmO4uK0jL.AC_UL210_SR210,210.jpg',
  },
  {
    id: 8,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: '$13.99',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5d253c231b7b3d000152f204/1636959802830-AW7JAWUJGCXXUYVIZC3J/Pride_and_Prejudice_Cover-Amazon-Front__77495.1569338564.386.513.jpg',
  },
  {
    id: 9,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: '$13.99',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/6186200c6b828336568b8269/d952956b-2571-4149-b1c1-e131127f9c65/07.jpg',
  },
];

const HomePage = () => {
  const navigate=useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isBuyNowDialogOpen, setIsBuyNowDialogOpen] = useState(false);
  const [isAddToCartFormOpen, setIsAddToCartFormOpen] = useState(false);
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );

      setSearchResults(response.data.items);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  const handleBuyClick = (result) => {
    setSelectedBook(result);
    setIsBuyNowDialogOpen(true);
  };

  

  const handleBuyNow = () => {
    setIsBuyNowDialogOpen(false);
    setIsPaymentFormOpen(true);
  };

 // In HomePage.js, inside handlePayment function
const handlePayment = () => {
  console.log(`Payment for: ${selectedBook.volumeInfo.title}`);
  navigate("/sample", { state: { bookDetails: selectedBook.volumeInfo } });
  setIsPaymentFormOpen(false);
};


  const handleDialogClose = () => {
    setSelectedBook(null);
    setIsAddToCartFormOpen(false);
    setIsBuyNowDialogOpen(false);
    setIsPaymentFormOpen(false);
  };

  const bannerImageUrl =
    'https://c4.wallpaperflare.com/wallpaper/233/355/793/book-pencil-form-wallpaper-preview.jpg';

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
    <Carousel data-bs-theme="dark" interval={1000} style={{ width: '100%', maxHeight: '50vh', objectFit: 'cover' }}>
      <Carousel.Item>
        <img src={'https://i.pinimg.com/736x/8b/f2/80/8bf28057d460748ea5ff540cd18806aa.jpg'} alt="Third slide" style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={'https://as2.ftcdn.net/v2/jpg/02/82/63/03/1000_F_282630384_YgHr8aj2LMizWUnWxOXRZz4Tj1CrGQKf.jpg'} alt="First slide" style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={'https://images.squarespace-cdn.com/content/v1/57d2dbc944024362fbb5d772/1491598618149-P4LYAKGJDYFBRBI53483/Books+and+coffee.jpg?format=2500w'} alt="Second slide" style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover' }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop'} alt="Third slide" style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover' }} />
      </Carousel.Item>
    
    </Carousel>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Explore Our Books</h2>

      {/* Search Bar */}
      <TextField
        label="Search Books"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <br></br><br></br>

      {/* Display Search Results */}
      <Grid container spacing={3}>
        {searchResults.map((result, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={result.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                alt={result.volumeInfo.title}
              />
              <CardContent>
                <Typography variant="subtitle1">{result.volumeInfo.title}</Typography>
                <Typography variant="caption" color="textSecondary">{`By ${
                  result.volumeInfo.authors ? result.volumeInfo.authors.join(', ') : 'Unknown Author'
                }`}</Typography>
                <Typography variant="body2">{`Price: ${
                  result.saleInfo && result.saleInfo.listPrice
                    ? `$${result.saleInfo.listPrice.amount.toFixed(2)}`
                    : 'Not Available'
                }`}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleBuyClick(result)}
                >
                  Buy & Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Buy Now Dialog */}
      <Dialog open={isBuyNowDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{selectedBook && selectedBook.volumeInfo.title}</DialogTitle>
        <DialogContent>
          <Typography>{`Author: ${
            selectedBook &&
            (selectedBook.volumeInfo.authors
              ? selectedBook.volumeInfo.authors.join(', ')
              : 'Unknown Author')
          }`}</Typography>
          <Typography>{`Price: ${
            selectedBook &&
            selectedBook.saleInfo &&
            selectedBook.saleInfo.listPrice
              ? `$${selectedBook.saleInfo.listPrice.amount.toFixed(2)}`
              : 'Not Available'
          }`}</Typography>
          <TextField label="Name" fullWidth margin="normal" />
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Address" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setIsAddToCartFormOpen(true);
              setIsBuyNowDialogOpen(false);
            }}
            color="primary"
          >
            Add to Cart
          </Button>
          <Button onClick={handleBuyNow} color="primary">
            Buy Now
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isAddToCartFormOpen} onClose={handleDialogClose}>
  <DialogTitle>Shopping Cart</DialogTitle>
  <DialogContent>
    <Typography variant="h6">Your selected items:</Typography>
    {shoppingCart.map((book, index) => (
      <div key={index}>
        <Card style={{ margin: '10px' }}>
          <CardContent>
            <Typography variant="subtitle1">{book.volumeInfo.title}</Typography>
            <Typography>{`Author: ${
              book.volumeInfo.authors
                ? book.volumeInfo.authors.join(', ')
                : 'Unknown Author'
            }`}</Typography>
            <Typography>{`Price: ${
              book.saleInfo && book.saleInfo.listPrice
                ? `$${book.saleInfo.listPrice.amount.toFixed(2)}`
                : 'Not Available'
            }`}</Typography>
          </CardContent>
        </Card>
      </div>
    ))}
    <Typography variant="h6">Hot Deals</Typography>
    <Typography>Get 50% off on selected items!</Typography>
    <Typography variant="h6">Offer Details</Typography>
    <Typography>Buy 2, get 1 free on all books!</Typography>
    <Typography variant="h6">Price Details</Typography>
    <Typography>{`Total Price: $${shoppingCart.reduce(
      (total, book) =>
        total + (book.saleInfo && book.saleInfo.listPrice
          ? book.saleInfo.listPrice.amount
          : 0),
      0
    ).toFixed(2)}`}</Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleDialogClose} color="primary">
      Continue Shopping
    </Button>
    <Button variant="contained" color="primary" onClick={handlePayment}>
      Proceed to Payment
    </Button>
  </DialogActions>
</Dialog>


      {/* Payment Form */}
      <Dialog open={isPaymentFormOpen} onClose={handleDialogClose}>
        <DialogTitle>{`Payment for ${selectedBook && selectedBook.volumeInfo.title}`}</DialogTitle>
        <DialogContent>
          <Typography>Please enter your payment details:</Typography>
          {/* Add payment form fields here */}
          <TextField label="Account Number" fullWidth margin="normal" />
          <TextField label="Expiration Date" fullWidth margin="normal" />
          <TextField label="CVV" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePayment} color="primary">
            Pay Now
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HomePage;
