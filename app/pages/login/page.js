"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link } from '@mui/material';
import { useRouter } from 'next/navigation';
import { auth, signInWithEmailAndPassword } from '/firebase';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigate to another page or show success message
      router.push('/'); // Adjust this route as needed
    } catch (error) {
      console.error('Error logging in:', error.message);
      setLoginError('Invalid email or password');
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
          helperText={loginError}
          error={Boolean(loginError)}
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
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography variant="body2" sx={{ marginTop: '20px', color: '#555' }}>
          Don't have an account?{' '}
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