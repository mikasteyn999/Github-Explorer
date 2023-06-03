// Import necessary packages
const express = require('express');
const { getUser } = require('../controllers/userController');

// Create a new router object
const router = express.Router();

// Route to get user details and repos from GitHub API
router.get('/:username', getUser);
  
// Export the router so it can be used in other parts of the app
module.exports = router;
