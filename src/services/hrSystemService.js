const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:3000';

exports.getTrainers = async () => {
  const response = await axios.get(`${BASE_URL}/api/trainers`);

  return response.data;
};
