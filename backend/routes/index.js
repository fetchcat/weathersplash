const express = require('express');
const router = express.Router();
const path = require('path');

const weatherRoutes = require('./weather');

router.use(express.static(path.join(__dirname, '../../frontend/build')));

router.use('/api/', weatherRoutes);

module.exports = router;
