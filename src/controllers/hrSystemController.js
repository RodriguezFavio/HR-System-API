const HrSystemApi = require('../services/hrSystemService');
const APIError = require('../middleware/error');

exports.getCourses = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await HrSystemApi.getCourse(courseId);
    const trainer = await HrSystemApi.getTrainer(course.trainerId);
    const learners = await HrSystemApi.getLearners(course.learners);

    const lepayaCourse = {
      id: course.id,
      title: course.title,
      date: course.date,
      trainer: {
        id: trainer.id,
        name: trainer.name,
      },
      learners: learners.map((learner) => ({
        id: learner.id,
        name: learner.name,
      })),
    };

    res.status(200).json({ message: 'Course found', lepayaCourse });
  } catch (err) {
    next(new APIError(400, 'Bad Request'));
  }
};
