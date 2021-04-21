const express = require('express');
const router = express.Router();
const isValid = require('./UserValidation')

router.get('/', (req, res) => {
    res.send('Hello World!!')
})

router.post('/v1/payqart.com/approval', isValid);

module.exports = router;