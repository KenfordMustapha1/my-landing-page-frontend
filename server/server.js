const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());

// Enable CORS - Update this to include your frontend URL
app.use(cors({
  origin: [
    'https://my-landing-page-frontend.vercel.app', // Replace with your actual frontend URL
    'http://localhost:3000', // For local development
    'http://localhost:3001'
  ],
  credentials: true
}));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
