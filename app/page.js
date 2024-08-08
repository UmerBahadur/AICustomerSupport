"use client";

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", user: false },
    { text: "I need help with my order.", user: true },
  ]);

  const router = useRouter();

  const handleSend = (message) => {
    setMessages([...messages, { text: message, user: true }]);
  };

  const handleLogout = () => {
    router.push('./login-signup');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#0071ce',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container maxWidth="md" sx={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '25px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        color: '#333',
        width: '500px',
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src="./wallmart.webp" alt="Walmart Logo" style={{ width: '80px', marginBottom: '10px' }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '10px', color: '#0071ce' }}>
            Welcome to Walmart!
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '10px', color: '#555' }}>
            How can we assist you today?
          </Typography>
        </Box>

        <Box sx={{
          flexGrow: 1,
          backgroundColor: '#f1f1f1',
          borderRadius: '10px',
          padding: '15px',
          overflowY: 'auto',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: '10px',
                padding: '10px',
                backgroundColor: msg.user ? '#e0e0e0' : '#0071ce',
                color: msg.user ? '#333' : '#fff',
                borderRadius: msg.user ? '10px 10px 0 10px' : '10px 10px 10px 0',
                maxWidth: '80%',
                wordWrap: 'break-word',
                alignSelf: msg.user ? 'flex-end' : 'flex-start',
              }}
            >
              {msg.text}
            </Box>
          ))}
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f1f1f1',
          borderRadius: '30px',
          padding: '8px 16px',
          position: 'relative',
          bottom: '0px',
        }}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Type your prompt here..."
            sx={{
              input: { color: '#333' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
              backgroundColor: '#e0e0e0',
              borderRadius: '30px',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton sx={{ color: '#0071ce' }} onClick={() => handleSend("User's message")}>
                    <Send />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0071ce',
            color: '#fff',
            position: 'absolute',
            top: '20px',
            right: '20px',
            '&:hover': {
              backgroundColor: '#005bb5',
            },
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Container>
    </Box>
  );
};

export default Page;
