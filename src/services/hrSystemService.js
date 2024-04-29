const axios = require('axios');
const Course = require('../model/course');
const Trainer = require('../model/trainer');

const BASE_URL = 'http://127.0.0.1:3000/api';

class HrSystemApi {
  static async getCourse(courseId) {
    const response = await axios.get(`${BASE_URL}/courses/${courseId}`);
    const { id, title, date, trainerId, learners } = response.data;

    const course = new Course(id, title, date, trainerId, learners);

    return course;
  }

  static async getTrainer(trainerId) {
    const response = await axios.get(`${BASE_URL}/trainers/${trainerId}`);
    const { id, name } = response.data;

    const trainer = new Trainer(id, name);

    return trainer;
  }

  static async getLearners(ids) {
    const response = await axios.get(`${BASE_URL}/learners`);
    const { learners } = response.data;
    const learnersList = learners.filter((learner) => ids.includes(learner.id));

    return learnersList;
  }
}

module.exports = HrSystemApi;
