const express = require('express');
const router = express.Router();
const Catway = require('../models/Catway');

// Route pour récupérer tous les catways
router.get('/', async (req, res) => {
    try {
        const catways = await Catway.find();
        res.json(catways);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour créer un catway
router.post('/', async (req, res) => {
    const { catwayNumber, catwayType, catwayState } = req.body;
    try {
        const catway = new Catway({ catwayNumber, catwayType, catwayState });
        await catway.save();
        res.status(201).json(catway);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
