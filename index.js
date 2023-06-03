// Importing required modules
require('dotenv').config();
const express = require('express'); // Fast, unopinionated, minimalist web framework for Node.js
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing (CORS)
const userRoutes = require('./routes/userRoutes'); // Importing userRoutes from the routes directory



const app = express(); // Create a new Express application

app.use(cors()); // Enable CORS for all routes

app.use('/api/users', userRoutes); // Mount the userRoutes at the '/api/users' endpoint

app.listen(5000, () => {
  console.log('Server is running on port 5000'); // Start the server and listen on port 5000
});
