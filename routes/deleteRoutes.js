// Dependencies
const save = require('../db/save.js');
const router = require('express').Router();

// Delete Route
router.delete('/notes/:id', (req, res) => {
    save.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
})

module.exports = router;