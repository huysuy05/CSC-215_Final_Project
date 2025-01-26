const express = require('express');
const path = require('path');

// app.js

// Import necessary modules

// Initialize the app
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});