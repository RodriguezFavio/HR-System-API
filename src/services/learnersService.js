const axios = require('axios');
const APIError = require('../utils/error');

const BASE_URL = 'http://127.0.0.1:3000/api';

class LearnerService {
  static async getLearners(ids) {
    const response = await axios.get(`${BASE_URL}/learners`);
    if (!response.data) {
      throw new APIError(404, 'Learners Not Found');
    }

    const { learners } = response.data;
    const learnersList = learners.filter((learner) => ids.includes(learner.id));

    return learnersList;
  }
}

module.exports = LearnerService;
