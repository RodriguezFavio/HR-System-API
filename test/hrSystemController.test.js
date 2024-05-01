const systemController = require('../src/controllers/hrSystemController');
const APIError = require('../src/middleware/error');

describe('Testing HR Sytem Controller', () => {
  it('should return the correct course, trainer, and learners for a given ID', async () => {
    const req = { params: { id: 'ef131a0c-3006-4a38-8cfd-085fa08f8361' } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();

    await systemController.getCourses(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);

    expect(res.json).toHaveBeenCalledWith({
      message: 'Course found',
      lepayaCourse: {
        id: 'ef131a0c-3006-4a38-8cfd-085fa08f8361',
        title: 'Business-focused bifurcated secured line',
        date: '2073-01-18T06:57:06.870Z',
        trainer: {
          id: 'd2b16518-cb01-42b1-970a-a5337dffc155',
          name: 'Miss Linda Conroy',
        },
        learners: [
          {
            id: 'd7aaf22e-d82f-448e-bc09-a6072e788b20',
            name: 'Manuel Casper',
          },
          {
            id: 'e9c7a7cd-33d5-4007-a6a4-11e9c208eb76',
            name: 'Kathleen Conroy',
          },
          {
            id: 'b98509fc-a393-4e43-9bf3-32f506ec7fa0',
            name: 'Mrs. Johanna Lebsack',
          },
          {
            id: '8ec62b73-d69d-43eb-b3c9-3b71aad259de',
            name: 'Patrick Mills',
          },
          {
            id: '3988158d-7309-46c1-bec1-8cb21b50f7b4',
            name: 'Rudy Walker',
          },
          {
            id: 'a259bc34-01c8-4452-89a1-66a36a01cc7b',
            name: 'Ernesto Wiza',
          },
        ],
      },
    });

    expect(next).not.toHaveBeenCalled();
  });

  it('Sould handle errors correctly', async () => {
    const req = { params: { id: 'invalid-id' } };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();

    await systemController.getCourses(req, res, next);

    expect(next).toHaveBeenCalledWith(expect.any(APIError));

    expect(res.status).not.toHaveBeenCalledWith(200);

    expect(res.json).not.toHaveBeenCalled();
  });
});
