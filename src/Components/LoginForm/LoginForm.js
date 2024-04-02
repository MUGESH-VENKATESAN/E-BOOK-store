import React, { useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    const emailValue = email.trim();
    const passwordValue = password.trim();
    try {
      const response = await axios.get(`http://localhost:8080/users?email=${emailValue}&password=${passwordValue}`);

      if (response.data.length > 0) {
        setLoginMessage('Login successful');
        navigate('/');
      } else {
        setLoginMessage('No user found');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <Container maxWidth="xs">
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                onChange={handleEmailChange}
                label="Email or Phone"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <AccountCircleIcon color="primary" style={{ marginRight: '8px' }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlePasswordChange}
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                InputProps={{
                  startAdornment: <LockIcon color="primary" style={{ marginRight: '8px' }} />,
                  endAdornment: (
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Typography variant="caption" color="textSecondary">
            <Link href="#" underline="always">
              Forgotten Password?
            </Link>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogin} color="primary" variant="contained" fullWidth>
            Log In
          </Button>
        </DialogActions>
        {loginMessage && (
          <Typography variant="body1" color="textPrimary" align="center">
            {loginMessage}
          </Typography>
        )}
        <center>Or</center>
        <DialogActions>
          <Button
            onClick={onClose} // Replace with your Google login logic
            color="primary"
            variant="contained"
            fullWidth
            startIcon={<GoogleIcon />}
          >
            Login with Google
          </Button>
        </DialogActions>
        <DialogActions>
          <Button
            onClick={onClose} // Replace with your Facebook login logic
            color="primary"
            variant="contained"
            fullWidth
            startIcon={<FacebookIcon />}
          >
            Login with Facebook
          </Button>
        </DialogActions>
      </Container>
    </Dialog>
  );
};

export default LoginForm;
