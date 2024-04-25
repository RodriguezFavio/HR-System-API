const handleService = require('../services/hrSystemService');

exports.getTrainers = async (req, res, next) => {
  try {
    const trainers = await handleService.getTrainers();

    console.log(trainers);
    if (trainers) {
      res.status(200).json({ message: 'Trainers found', trainers });
    } else {
      const error = new Error('Trainers not found!');
      error.statusCode = 404;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
