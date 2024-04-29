const express = require('express');

const router = express.Router();

const systemController = require('../controllers/hrSystemController');

router.get('/lepaya-courses/:id', systemController.getCourses);

module.exports = router;
