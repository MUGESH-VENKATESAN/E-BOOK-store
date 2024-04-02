import React from 'react';
import './Footer.css';

const playstoreImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTge8M_U7cWGAYgZU7DjBjE27kPikLHSwSX3w&usqp=CAU';
const appstoreImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoxwJNewzFHptDMY0xErxhuualOWQ89OBmw&usqp=CAU';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Follow Us</h2>
            <p>Email: example@email.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="javascript:void(0)">Terms of Use</a></li>
              <li><a href="javascript:void(0)">Privacy Settings</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Download Our App</h2>
            <div className="download-links">
              <a href="/download" className="app-link">
                <img src={playstoreImageUrl} alt="Download on Play Store" />
              </a>
              <a href="/download" className="app-link">
                <img src={appstoreImageUrl} alt="Download on App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
