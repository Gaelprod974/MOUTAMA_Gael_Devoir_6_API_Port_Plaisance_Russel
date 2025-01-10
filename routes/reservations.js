const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Créer une réservation
router.post('/', reservationController.createReservation);

module.exports = router;
