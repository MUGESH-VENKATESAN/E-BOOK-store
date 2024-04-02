// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';
import Footer from './Components/Footer/Footer';
import ProfilePage from './Components/SideBar/ProfilePage';
import QueriesPage from './Components/SideBar/QueriesPage';
import ServicePage from './Components/SideBar/ServicePage';
import SettingsPage from './Components/SideBar/SettingsPage';
import './styles.css';
import Sample from './Components/sample/Sample';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="background-image">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/queries" element={<QueriesPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path='/sample' element={<Sample/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
