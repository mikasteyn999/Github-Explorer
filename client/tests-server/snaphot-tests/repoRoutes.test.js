const request = require('supertest');
const app = require('../App');
const repoRoutes = require('../routes/repoRoutes');

// Test suite: Repo Routes
describe('Repo Routes', () => {
  // Test case: Should return repository details
  it('should return repository details', async () => {
    // Send a GET request to the repo endpoint
    const response = await request(app).get('/api/repo/username/reponame');

    // Assert that the response status is 200
    expect(response.status).toBe(200);

    // Assert that the response body matches the snapshot
    expect(response.body).toMatchSnapshot();
  });
});
