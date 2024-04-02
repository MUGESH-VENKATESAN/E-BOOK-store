import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const NavBar = () => {
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginFormOpen(true);
  };

  const handleRegistrationClick = () => {
    setRegistrationFormOpen(true);
  };

  const handleClose = () => {
    setLoginFormOpen(false);
    setRegistrationFormOpen(false);
  };

  // Simulate login state, replace with actual login state
  const isLoggedIn = false;

  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: 'rgba(0, 123, 255, 0.9)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SideBar />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '1px' }}>
            SRM E-BOOK
          </Typography>

          <Hidden smDown>
            <Button color="inherit" component={Link} to="/" className="button-text">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" className="button-text">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact" className="button-text">
              Contact
            </Button>
          </Hidden>

          {isLoggedIn ? (
            <Button color="inherit" className="button-text">
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" onClick={handleLoginClick} className="button-text">
                Login
              </Button>
              <Button color="inherit" onClick={handleRegistrationClick} className="button-text">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Dialog open={isLoginFormOpen} onClose={handleClose}>
        <LoginForm onClose={handleClose} />
      </Dialog>
      <Dialog open={isRegistrationFormOpen} onClose={handleClose}>
        <RegistrationForm onClose={handleClose} />
      </Dialog>
    </div>
  );
};

export default NavBar;