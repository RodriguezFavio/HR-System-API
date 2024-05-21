const { param, validationResult } = require('express-validator');
const APIError = require('../utils/error');

exports.validationId = [param('id').isUUID().withMessage('Invalid ID format')];

exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    const err = new APIError(400, errorMessages.join(', '));
    return next(err);
  }
  next();
};
