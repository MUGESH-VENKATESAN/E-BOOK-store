// SideBar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

const SideBar = () => {
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
        <DehazeIcon />
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={handleClose} width={400}>
        <List sx={{ width: 150 }}>
          <ListItem button component={Link} to="/profile" onClick={handleClose}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/queries" onClick={handleClose}>
            <ListItemText primary="Queries" />
          </ListItem>
          <ListItem button component={Link} to="/service" onClick={handleClose}>
            <ListItemText primary="Service" />
          </ListItem>
          <ListItem button component={Link} to="/settings" onClick={handleClose}>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
