const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('🚀 Career Copilot Backend is running...');
});

// Proxy route to trigger Pathway AI
app.get('/run-pathway', async (req, res) => {
  try {
    const response = await axios.get('https://7aa09a74-e829-49fe-8d57-bfb9cb20c294-00-679vhfhawz6t.sisko.replit.dev/run-pathway');
    res.send(response.data);
  } catch (error) {
    console.error('Error connecting to AI:', error.message);
    res.status(500).send('❌ Could not reach AI server');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend Server running on port ${PORT}`);
});
