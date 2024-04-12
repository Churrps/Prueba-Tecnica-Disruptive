const express = require('express');
const router = express.Router();
const path = 'category'
const Controller = require('../controllers/category');

router.get(`/${path}`, Controller.getAllCategories);

router.post(`/${path}`, async (req, res) => {
    try {
        const categoryData = req.body;
        const newCategory = await Controller.insertData(categoryData);
        res.status(201).json(newCategory);
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).send('Error al insertar el categoria');
    }
});

module.exports = router;