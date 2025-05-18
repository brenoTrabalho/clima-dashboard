const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
    res.send('Eu sou muito inteligente pow\n');
});

module.exports = router;