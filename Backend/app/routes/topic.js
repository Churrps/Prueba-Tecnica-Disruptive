const express = require('express');
const router = express.Router();
const path = 'topic'
const Controller = require('../controllers/topic');

router.get(`/${path}`, Controller.getAllTopics);

router.post(`/${path}`, async (req, res) => {
    try {
        const topicData = req.body;
        const newTopic = await Controller.insertData(topicData);
        res.status(201).json(newTopic);
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).send('Error al insertar el tema');
    }
});

module.exports = router;