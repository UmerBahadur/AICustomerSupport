"use client";

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const LoginSignup = () => {
  const router = useRouter(); // Initialize useRouter hook

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
        <img src="/path/to/walmart-logo.png" alt="Walmart Logo" style={{ width: '100px', marginBottom: '20px' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0071ce', marginBottom: '20px' }}>
          Welcome to Walmart!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color: '#555' }}>
          Do you already have an account? Log in to continue your shopping experience. 
          If not, sign up to get started!
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push('/pages/login')} // Correct path to login
          sx={{
            backgroundColor: '#0071ce',
            color: '#fff',
            marginBottom: '10px',
            width: '100%',
            padding: '10px 0',
            '&:hover': {
              backgroundColor: '#005bb5',
            },
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          onClick={() => router.push('/pages/signup')} // Correct path to signup
          sx={{
            borderColor: '#0071ce',
            color: '#0071ce',
            width: '100%',
            padding: '10px 0',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          Signup
        </Button>
      </Container>
    </Box>
  );
};

export default LoginSignup;
