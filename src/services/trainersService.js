const axios = require('axios');
const Trainer = require('../model/trainer');
const APIError = require('../utils/error');

const BASE_URL = 'http://127.0.0.1:3000/api';

class TrainerService {
  static async getTrainer(trainerId) {
    const response = await axios.get(`${BASE_URL}/trainers/${trainerId}`);
    if (!response.data) {
      throw new APIError(404, 'Trainer Not Found');
    }

    const { id, name } = response.data;

    const trainer = new Trainer(id, name);

    return trainer;
  }
}

module.exports = TrainerService;
