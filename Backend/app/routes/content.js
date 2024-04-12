const express = require('express');
const router = express.Router();
const path = 'content'
const Controller = require('../controllers/content');

router.get(`/${path}`, Controller.getAllContents);

router.post(`/${path}`, async (req, res) => {
    try {
        const contentData = req.body;
        const newContent = await Controller.insertData(contentData);
        res.status(201).json(newContent);
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).send('Error al insertar el contenido');
    }
});

module.exports = router;