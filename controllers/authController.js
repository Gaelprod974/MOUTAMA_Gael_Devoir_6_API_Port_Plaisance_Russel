const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Enregistrement d'un utilisateur
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Connexion de l'utilisateur
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Utilisateur non trouvé' });

        const match = await user.matchPassword(password);
        if (!match) return res.status(400).json({ message: 'Mot de passe incorrect' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
