const express = require('express');
const path = require('path');

// Import the database and the url to the cluster
const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://huysuy05:ditcumay@cluster05.gbowi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster05y";


// app.js

// Import necessary modules

// Initialize the app
const app = express();

// Set the port
const PORT = process.env.PORT || 5500;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.sendFile();
});

app.get("/about", (req, res) => {
    res.sendFile("")
})



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});