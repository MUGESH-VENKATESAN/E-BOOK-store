import React, { useState } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const profileData = {
    profilePicUrl: 'https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg',
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/80/88/85/240_F_580888588_tmIGs41mJKdzLtT1ZK8HVcoZYwlBIiZq.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color on the background image
  };

  const profileContainerStyle = {
    textAlign: 'center',
    color: 'black', // Text color for name and age
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '20px',
  };

  const labelStyle = {
    color: 'black', // Text color for form labels
  };

  return (
    <div style={backgroundStyle}>
      <div style={profileContainerStyle}>
        <img
          src={profileData.profilePicUrl}
          alt="Profile Pic"
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
      <div style={formStyle}>
        <form>
          <center>
          <label htmlFor="name" style={labelStyle}>NAME:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            style={{ width: '100%',height:'30px', marginBottom: '10px', color: 'black' }} // Text color for input
          />

          <label htmlFor="age" style={labelStyle}>AGE:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
            style={{ width: '100%',height:'30px', marginBottom: '10px', color: 'black' }} // Text color for input
          />

          <label htmlFor="email" style={labelStyle}>EMAIL:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={{ width: '100%',height:'30px', marginBottom: '10px', color: 'black' }} // Text color for input
          />

          <label htmlFor="address" style={labelStyle}>ADDRESS:</label>
          <textarea
            id="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
            style={{ width: '100%',height:'60px', marginBottom: '10px', color: 'black' }} // Text color for textarea
          ></textarea>

          <button type="submit" style={{ width: '30%',height:'40px', color: 'white',backgroundColor:'blue' }}>
            SAVE
          </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
