const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bem-vindo ao Clima Dashboard!\n');
});

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Servidor funcionando corretamente' });
});

router.get('/info', (req, res) => {
    res.json({
        appName: 'Clima Dashboard',
        version: '1.0.0',
        author: 'Breno',
    });
});

module.exports = router;