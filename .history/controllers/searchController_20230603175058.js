// Import necessary packages
const fetch = require('node-fetch');

// Function for searching GitHub users
const searchUsers = async (req, res) => {
    // Extract the search query from the request query parameters
    const query = req.query.q;

    try {
        // Send a GET request to the GitHub API to search for users
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        
        // Parse the response as JSON
        const data = await response.json();

        // Send the results back to the client
        res.json(data.items);
    } catch (error) {
        // Log the error and send a 500 response to the client
        console.error(error);
        res.status(500).send('Error occurred while searching users.');
    }
};

module.exports = { searchUsers };
