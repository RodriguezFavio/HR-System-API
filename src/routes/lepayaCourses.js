const express = require('express');

const systemController = require('../controllers/hrSystemController');
const validation = require('../middleware/validation');

const router = express.Router();

router.get(
  '/lepaya-courses/:id',
  [validation.validationId, validation.handleValidationErrors],
  systemController.getCourses
);

module.exports = router;
