// Import necessary modules
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const Task = require("./database.js");


// Endpoint to save to the database


// Initialize the app
const app = express();

// Use JSON in the body request
app.use(bodyParser.json());

// Set the port
const PORT = process.env.PORT || 5500;
// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
// Route back to the home page
app.get("/", (req, res) => {
    res.redirect("/home");
});
// Routing to the home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
});
// Routing to the about page
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});
// Routing to the to-do page
app.get("/to-do", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
});
// Handles wrong route
app.get("/:param", (req, res) => {
    const param = req.params.param;
    if (!['home', 'to-do', 'about'].includes(param)) {
        res.send("You are on a wrong route, please redirect to the main page!")
    }
});

// Handles the endpoint to save tasks to the database
app.post("/to-do", async (req, res) => {
    try {
        const { taskName } = req.body;

        // Create a new Task document
        const task = new Task({task: taskName});
        await task.save();
        res.status(201).send("Task saved to the database successfully");
    }

    catch (err){
        console.error(`Error saving task: ${err}`);
        res.status(500).send("Failed to save tasks");
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});