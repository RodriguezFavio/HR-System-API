const express = require('express');

const router = express.Router();

//endpoint routes of API;

router.get('/trainers');

router.get('/trainers/:id');

router.get('/learners');

router.get('/learners/:id');

router.get('/courses');

router.get('/courses/:id');

module.exports = router;
