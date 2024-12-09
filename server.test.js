const { app, server } = require('./server');
const request = require('supertest');

describe('GET /get-array', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => { });
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  afterAll(() => {
    server.close(); // Ensure the server is closed after tests
  });

  it('should return user data with a 200 status code', async () => {
    // Validate status code and conten-type
    const response = await request(app).get('/get-array')
      .expect(200)
      .expect('Content-Type', /json/);

    // Validate structure of returned data
    response.body.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('start');
      expect(item).toHaveProperty('end');
    });
  });

  it('should handle errors gracefully', async () => {
    jest.spyOn(global, 'setTimeout').mockImplementationOnce(() => {
      throw new Error('Simulated Error');
    });

    await request(app)
      .get('/get-array')
      .expect(500)
      .expect((res) => {
        expect(res.body).toHaveProperty('message', 'Internal Server Error'); // Check error message
      });

    // Restore the original implementation
    global.setTimeout.mockRestore();
  });
});
