// Import necessary packages
const express = require('express');
const fetch = require('node-fetch');

// Create a new router object
const router = express.Router();

// Route for getting a GitHub repository's details
router.get('/:username/:repo', async (req, res) => {
    // Extract the username and repo from the request parameters
    const { username, repo } = req.params;

    try {
        // Send a GET request to the GitHub API to get the repo's details
        const response = await fetch(`${process.env.GITHUB_REPO_BASE_URL}/${username}/${repo}`,
        headers, {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        );
        
        // Parse the response as JSON
        const repoDetails = await response.json();

        // Add the last 5 commits to the repoDetails object
        repoDetails.commits = commits.slice(0, 5); // limit to 5 commits

        // Send the repo details and commits back to the client
        res.json(repoDetails);
    } catch (error) {
        // Log the error and send a 500 response to the client
        console.error(error);
        res.status(500).send('Error occurred while getting repo details.');
    }
});

module.exports = router;
