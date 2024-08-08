"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link } from '@mui/material';
import { useRouter } from 'next/navigation';
import { auth, db, createUserWithEmailAndPassword, ref, set } from '/firebase'; // Adjust the import path as needed

const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (pwd) => {
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    
    if (pwd.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleSignup = async () => {
    validatePassword(password);
    if (passwordError) return; // Exit if password validation fails

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Realtime Database
      await set(ref(db, 'users/' + user.uid), {
        username,
        email
      });

      // Navigate to login page
      router.push('/pages/login');
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#0071ce', // Walmart blue background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container maxWidth="sm" sx={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '25px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        color: '#333',
        textAlign: 'center',
      }}>
        <img src="/wallmart.png" alt="Walmart Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0071ce', marginBottom: '5px' }}>
          New to Walmart AI Customer Support? Sign up for an account now!
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '20px', color: '#555' }}>
          Create your account!
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '20px' }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '20px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '20px' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={passwordError}
          error={Boolean(passwordError)}
        />
        <Box sx={{
          backgroundColor: '#f7a03c', // Walmart orange
          color: '#fff',
          borderRadius: '5px',
          padding: '15px',
          marginBottom: '20px',
          textAlign: 'left',
          fontSize: '14px', // Slightly smaller font size
        }}>
          <Typography variant="body2">
            All new passwords must contain at least 8 characters. We also suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0071ce',
            color: '#fff',
            width: '100%',
            padding: '10px 0',
            '&:hover': {
              backgroundColor: '#005bb5',
            },
          }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>
        <Typography variant="body2" sx={{ marginTop: '20px', color: '#555' }}>
          Already have an account?{' '}
          <Link
            component="button"
            variant="body2"
            onClick={() => router.push('/pages/login')} // Navigate to Login page
            sx={{ color: '#0071ce', textDecoration: 'underline' }}
          >
            Login
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Signup;
