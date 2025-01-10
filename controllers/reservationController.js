const Reservation = require('../models/Reservation');

// Créer une réservation
exports.createReservation = async (req, res) => {
    const { catwayNumber } = req.params;
    const { clientName, boatName, startDate, endDate } = req.body;

    try {
        const reservation = new Reservation({ catwayNumber, clientName, boatName, startDate, endDate });
        await reservation.save();
        res.status(201).json(reservation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
