// Import necessary modules
const express = require('express');
const path = require('path');

// Import necessary modules

// Initialize the app
const app = express();

// Set the port
const PORT = process.env.PORT || 5500;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route back to the home page
app.get("/", (req, res) => {
    res.redirect("/home");
})

// Routing to the home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Routing to the about page
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
})

// Routing to the to-do page
app.get("/to-do", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});