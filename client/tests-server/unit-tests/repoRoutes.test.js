const request = require('supertest');
const app = require('../App');

// Test suite: repoRoutes
describe('repoRoutes', () => {
  // Test case: GET /api/repos/:username/:reponame should return repo details
  test('GET /api/repos/:username/:reponame should return repo details', async () => {
    // Send a GET request to the repo endpoint
    const response = await request(app).get('/api/repos/testuser/testrepo');

    // Assert that the response status code is 200
    expect(response.statusCode).toBe(200);

    // Assert that the response body has the expected property values
    expect(response.body).toHaveProperty('name', 'testrepo');
  });
});
