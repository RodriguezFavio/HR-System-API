const express = require('express');

const router = express.Router();

const systemController = require('../controllers/hrSystemController');

//endpoint routes of API;

router.get('/trainers', systemController.getTrainers);

router.get('/trainers/:id');

router.get('/learners');

router.get('/learners/:id');

router.get('/courses');

router.get('/courses/:id');

module.exports = router;
