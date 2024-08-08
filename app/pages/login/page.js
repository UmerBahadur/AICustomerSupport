"use client";

import React from 'react';
import { Box, Container, Typography, TextField, Button, Link } from '@mui/material';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

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
          Welcome to Walmart!
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '20px', color: '#555' }}>
          Login to Walmart AI Customer Support!
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '20px' }}
        />
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
        >
          Login
        </Button>
        <Typography variant="body2" sx={{ marginTop: '20px', color: '#555' }}>
          New to Walmart Customer Support?{' '}
          <Link
            component="button"
            variant="body2"
            onClick={() => router.push('/pages/signup')} // Navigate to Signup page
            sx={{ color: '#0071ce', textDecoration: 'underline' }}
          >
            Sign Up
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Login;
