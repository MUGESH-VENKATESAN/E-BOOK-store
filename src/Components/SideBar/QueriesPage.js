import React, { useState } from 'react';

const QueriesPage = () => {
  const [queryTitle, setQueryTitle] = useState('');
  const [queryContent, setQueryContent] = useState('');

  const handleQueryTitleChange = (e) => {
    setQueryTitle(e.target.value);
  };

  const handleQueryContentChange = (e) => {
    setQueryContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending the data to a server or updating state
    console.log('Query submitted:', { queryTitle, queryContent });
    // Optionally, you can reset the form fields after submission
    setQueryTitle('');
    setQueryContent('');
  };

  return (
    <div style={backgroundStyle}>
      <div style={containerStyle}>
        <h1 style={headerStyle}>QUERIES</h1>

        {/* Professional Form */}
        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={labelStyle} htmlFor="queryTitle">
            BOOK NAME:
          </label>
          <input
            type="text"
            id="queryTitle"
            value={queryTitle}
            onChange={handleQueryTitleChange}
            style={inputStyle}
            placeholder="Enter your query title"
            required
          />

          <label style={labelStyle} htmlFor="queryContent">
            QUERY CONTENT:
          </label>
          <textarea
            id="queryContent"
            value={queryContent}
            onChange={handleQueryContentChange}
            style={inputStyle}
            placeholder="Describe your query..."
            rows="4"
            required
          ></textarea>

          <button type="submit" style={submitButtonStyle}>
            SUBMIT QUERY
          </button>
        </form>
      </div>
    </div>
  );
};

const backgroundStyle = {
  backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/05/84/92/240_F_305849241_ZJjGYfLIDmkw0BevC7GMs8wfaImijyu9.jpg")', // Replace with the actual URL of your background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

const headerStyle = {
  fontSize: '2em',
  textAlign: 'center',
  marginBottom: '20px',
};

const formStyle = {
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
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

export default QueriesPage;
