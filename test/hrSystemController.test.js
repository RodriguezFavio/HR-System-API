const { getCourses } = require('../src/controllers/hrSystemController');
const HrSystemApi = require('../src/services/hrSystemService');
const APIError = require('../src/middleware/error');

jest.mock('../src/services/hrSystemService');

describe('getCourses function', () => {
  it('should return course details when courseId exists', async () => {
    const mockCourseId = '123';
    const mockCourse = {
      id: mockCourseId,
      title: 'Mock Course',
      date: '2022-12-31',
      trainerId: '456',
      learners: ['789', '101'],
    };
    const mockTrainer = {
      id: '456',
      name: 'Mock Trainer',
    };
    const mockLearners = [
      { id: '789', name: 'Learner One' },
      { id: '101', name: 'Learner Two' },
    ];

    HrSystemApi.getCourse.mockResolvedValue(mockCourse);
    HrSystemApi.getTrainer.mockResolvedValue(mockTrainer);
    HrSystemApi.getLearners.mockResolvedValue(mockLearners);

    const req = { params: { id: mockCourseId } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await getCourses(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Course found',
      lepayaCourse: {
        id: mockCourseId,
        title: 'Mock Course',
        date: '2022-12-31',
        trainer: {
          id: '456',
          name: 'Mock Trainer',
        },
        learners: [
          { id: '789', name: 'Learner One' },
          { id: '101', name: 'Learner Two' },
        ],
      },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('should handle error when courseId does not exist', async () => {
    const mockCourseId = 'nonexistent-id';
    const error = new APIError(400, 'Bad Request');

    HrSystemApi.getCourse.mockRejectedValue(error);

    const req = { params: { id: mockCourseId } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    await getCourses(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
