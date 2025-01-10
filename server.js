const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const reservationRoutes = require('./routes/reservations');
const catwayRoutes = require('./routes/catways');

dotenv.config();

// Connexion à la base de données MongoDB
connectDB();

const app = express();
app.use(express.json()); // Middleware pour parser les requêtes JSON
app.use(cors()); // Middleware pour gérer les requêtes cross-origin

// Routes
app.use('/users', userRoutes);
app.use('/catways', catwayRoutes);
app.use('/catways/:id/reservations', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
