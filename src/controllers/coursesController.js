const CourseService = require('../services/coursesService');
const LearnerService = require('../services/learnersService');
const TrainerService = require('../services/trainersService');

exports.getCourses = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await CourseService.getCourse(courseId);
    const trainer = await TrainerService.getTrainer(course.trainerId);
    const learners = await LearnerService.getLearners(course.learners);

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

    res.status(200).json(lepayaCourse);
  } catch (err) {
    next(err);
  }
};
