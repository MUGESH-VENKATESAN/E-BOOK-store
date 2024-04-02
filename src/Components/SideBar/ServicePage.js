import React, { useState } from 'react';

const ServicePage = () => {
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleServiceNameChange = (e) => {
    setServiceName(e.target.value);
  };

  const handleServiceDescriptionChange = (e) => {
    setServiceDescription(e.target.value);
  };

  const handleServiceCategoryChange = (e) => {
    setServiceCategory(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Service and Payment submitted:', {
      serviceName,
      serviceDescription,
      serviceCategory,
      cardNumber,
      expirationDate,
      cvv,
    });
    // You can add logic here to handle the form submission, such as sending the data to a server.

    // Optionally, you can reset the form fields after submission
    setServiceName('');
    setServiceDescription('');
    setServiceCategory('');
    setCardNumber('');
    setExpirationDate('');
    setCVV('');
  };

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Professional Service Request</h1>

      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="serviceName">
          Book Name:
        </label>
        <input
          type="text"
          id="serviceName"
          value={serviceName}
          onChange={handleServiceNameChange}
          style={inputStyle}
          placeholder="Enter the service name"
          required
        />

        <label style={labelStyle} htmlFor="serviceDescription">
          Service Details:
        </label>
        <textarea
          id="serviceDescription"
          value={serviceDescription}
          onChange={handleServiceDescriptionChange}
          style={inputStyle}
          placeholder="Describe the service..."
          rows="4"
          required
        ></textarea>

        <label style={labelStyle} htmlFor="serviceCategory">
          Service Category:
        </label>
        <select
          id="serviceCategory"
          value={serviceCategory}
          onChange={handleServiceCategoryChange}
          style={inputStyle}
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="category1">Cash on delivery</option>
          <option value="category2">online payment</option>
          <option value="category3">others</option>
        </select>

        <label style={labelStyle} htmlFor="cardNumber">
          Account Number:
        </label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          style={inputStyle}
          placeholder="Enter your  number"
          required
        />

        <label style={labelStyle} htmlFor="expirationDate">
          Expiration Date:
        </label>
        <input
          type="text"
          id="expirationDate"
          value={expirationDate}
          onChange={handleExpirationDateChange}
          style={inputStyle}
          placeholder="MM/YYYY"
          required
        />

        <label style={labelStyle} htmlFor="cvv">
          CVV:
        </label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCVVChange}
          style={inputStyle}
          placeholder="Enter CVV"
          required
        />

        <button type="submit" style={submitButtonStyle}>
          Submit Service & Pay
        </button>
      </form>
    </div>
  );
};

const pageStyle = {
  backgroundImage: 'url("https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensure the background covers the entire page
  padding: '20px',
  boxSizing: 'border-box',
  color: '#fff', // Text color on top of the background
};

const headerStyle = {
  fontSize: '2em',
  textAlign: 'center',
  marginBottom: '20px',
};

const formStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for the form
  padding: '15px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const labelStyle = {
  display: 'block',
  margin: '10px 0',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  marginBottom: '15px',
};

const submitButtonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default ServicePage;
