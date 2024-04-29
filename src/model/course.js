class Course {
  constructor(id, title, date, trainerId, learners) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.trainerId = trainerId;
    this.learners = learners;
  }
}

module.exports = Course;
