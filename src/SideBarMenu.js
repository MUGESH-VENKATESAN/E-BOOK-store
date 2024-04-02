// SideBarMenu.js

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleToggle}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={handleClose}>
        <List>
          <ListItem button component={Link} to="/profile" onClick={handleClose}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/address" onClick={handleClose}>
            <ListItemText primary="Address" />
          </ListItem>
          <ListItem button component={Link} to="/service" onClick={handleClose}>
            <ListItemText primary="Service" />
          </ListItem>
          <ListItem button component={Link} to="/sources" onClick={handleClose}>
            <ListItemText primary="Sources" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideBarMenu;
