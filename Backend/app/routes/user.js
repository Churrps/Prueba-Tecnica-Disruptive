const express = require('express');
const router = express.Router();
const path = 'user'
const Controller = require('../controllers/user')

router.get(`/${path}`, Controller.getAllUsers)

router.post(`/${path}`, async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await Controller.insertData(userData);
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).send('Error al insertar el usuario');
    }
});

module.exports = router;