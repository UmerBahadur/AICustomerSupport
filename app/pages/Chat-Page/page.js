"use client";

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import axios from 'axios'; // Import axios for making HTTP requests

const Page = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", user: false },
  ]);
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { text: input, user: true }]);
    setInput('');

    try {
      // Send user message to the API
      const response = await axios.post('/api/chat', { userMessage: input });
      const aiResponse = response.data.response;

      // Add AI response to the chat
      setMessages([...messages, { text: input, user: true }, { text: aiResponse, user: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default action, which might be submitting a form or adding a new line.
      handleSend();
    }
  };

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#0071ce',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', // Ensure this is relative for absolute positioning of logout button
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
        <Box sx={{ textAlign: 'center', marginBottom: '20px', position: 'relative' }}>
          <img src="/wallmart.png" alt="Wallmart Logo" style={{ width: '120px', marginBottom: '0px', }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '0px', color: '#0071ce' }}>
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
            value={input}
            onKeyPress={handleKeyPress}
            onChange={(e) => setInput(e.target.value)}
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
                  <IconButton sx={{ color: '#0071ce' }} onClick={handleSend}>
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
