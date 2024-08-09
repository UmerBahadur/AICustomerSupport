"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Link } from '@mui/material';
import { useRouter } from 'next/navigation';
import { auth, signInWithEmailAndPassword } from '/firebase'; // Adjust this import path as needed

const LoginSignup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigate to home page or dashboard after successful login
      router.push('/');
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
        <img src="/wallmart.png" alt="Walmart Logo" style={{ width: '100px', marginBottom: '20px' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0071ce', marginBottom: '20px' }}>
          Welcome to Walmart!
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '20px', color: '#555' }}>
          Login to Walmart AI Customer Support!
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(loginError)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(loginError)}
          />
          {loginError && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {loginError}
            </Typography>
          )}
          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: '#0071ce',
              color: '#fff',
              marginTop: '20px',
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
          <Typography variant="body2" sx={{ marginTop: '20px', color: '#555' }}>
            Don't have an account?{' '}
            <Link
              variant="body 2"
              onClick={() => router.push('/pages/signup')}
              sx={{ color: '#0071ce', textDecoration: 'underline' }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginSignup;
