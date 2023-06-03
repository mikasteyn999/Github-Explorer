// Import necessary packages
const express = require('express');
const { getRepoDetails } = require('../controllers/repoController');

// Create a new router object
const router = express.Router();

// Route for getting a GitHub repository's details
router.get('/:username/:repo', getRepoDetails);

module.exports = router;
