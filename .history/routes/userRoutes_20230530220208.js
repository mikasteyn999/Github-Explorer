// Import modules
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

// Route to get user details and repos from GitHub API
router.get('/:username', async (req, res) => {
    const { username } = req.params; // Destructure username from the URL params
    
    // Fetch user details and repositories from GitHub's API
    const userDetailsResponse = await fetch(`https://api.github.com/users/${username}`);
    const userReposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
  
    // If either request failed, return a 404 error
    if (!userDetailsResponse.ok || !userReposResponse.ok) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  
    // Parse responses as JSON
    const userDetails = await userDetailsResponse.json();
    const userRepos = await userReposResponse.json();
  
    // Send the parsed data back as the response
    res.json({
      userDetails,
      userRepos
    });
  });
  
  // Export the router so it can be used in other parts of the app
  module.exports = router;
