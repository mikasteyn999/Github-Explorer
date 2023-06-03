// Import necessary packages
const express = require('express');
const fetch = require('node-fetch');

// Create a new router object
const router = express.Router();

// Route for searching GitHub users
router.get('/users', async (req, res) => {
    // Extract the search query from the request query parameters
    const query = req.query.q;

    try {
        // Send a GET request to the GitHub API to search for users
        const response = await fetch(`${process.env.GITHUB_USER_SEARCH_URL}?q=${query}`);
        
        // Parse the response as JSON
        const data = await response.json();

        // Send the results back to the client
        res.json(data.items);
    } catch (error) {
        // Log the error and send a 500 response to the client
        console.error(error);
        res.status(500).send('Error occurred while searching users.');
    }
});

module.exports = router;
