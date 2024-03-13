// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hellooo');
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
