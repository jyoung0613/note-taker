// Dependencies
const save = require('../db/save.js');
const router = require('express').Router();

// Routes
// Get Route
router.get('/notes', (req, res) => {
    save.getNotes()
        .then((parsedNotes) => {
            return res.json(parsedNotes);
        })
        .catch((err) => res.status(500).json(err));
})

// Post Route
router.post('/notes', (req, res) => {
    save.addNote(req.body)
    .then((newNote) => res.json(newNote))
    .catch((err) => res.status(500).json(err));
})

// Export
module.exports = router;