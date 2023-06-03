// Import necessary packages
const express = require('express');
const { searchUsers } = require('../controllers/searchController');

// Create a new router object
const router = express.Router();

// Route for searching GitHub users
router.get('/users', searchUsers);

module.exports = router;
