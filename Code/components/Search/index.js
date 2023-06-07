const express = require('express');
const router = express.Router();

const SearchController = require('./SearchController');

router.get('/', SearchController.Search);

module.exports = router;
