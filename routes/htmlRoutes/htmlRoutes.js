// Dependencies
const path = require('path');
const router = require('express').Router();

// Routing
// Get route for notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Get route for root
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export
module.exports = router;