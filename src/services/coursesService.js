const axios = require('axios');
const Course = require('../model/course');
const APIError = require('../utils/error');

const BASE_URL = 'http://127.0.0.1:3000/api';

class CourseService {
  static async getCourse(courseId) {
    const response = await axios.get(`${BASE_URL}/courses/${courseId}`);
    if (!response.data) {
      throw new APIError(404, 'Course Not Found');
    }
    const { id, title, date, trainerId, learners } = response.data;

    const course = new Course(id, title, date, trainerId, learners);

    return course;
  }
}

module.exports = CourseService;
