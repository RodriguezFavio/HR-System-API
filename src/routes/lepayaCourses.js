const express = require('express');

const coursesController = require('../controllers/coursesController');
const validation = require('../middleware/validation');

const router = express.Router();

router.get(
  '/lepaya-courses/:id',
  [validation.validationId, validation.handleValidationErrors],
  coursesController.getCourses
);

module.exports = router;
