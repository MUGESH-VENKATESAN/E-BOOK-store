import React, { useRef, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Container,
} from '@mui/material';
import axios from 'axios';

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    return passwordRegex.test(password);
  };

  const mockRegister = (data) => {
    console.log('Mock registration:', data);
    // You can replace this mock registration with your actual registration logic
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!isPasswordValid(formData.password)) {
      newErrors.password =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      mockRegister(formData); // Call the mock registration function with the form data
      onClose();
    }
  };

  const handlePost = async () => {
    const data = {
      email: formData.username, // Assuming the email comes from the username field
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post('http://localhost:8080/users', data);
      console.log(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <Container maxWidth="xs">
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={Boolean(errors.username)}
            helperText={errors.username}
            inputRef={usernameRef}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            inputRef={passwordRef}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => { handleSubmit(); handlePost(); }} color="primary">
            Register
          </Button>
        </DialogActions>
      </Container>
    </Dialog>
  );
};

export default RegistrationForm;
