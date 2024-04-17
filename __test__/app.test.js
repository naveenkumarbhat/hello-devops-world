const request = require('supertest');
const app = require('../index');

// Close the server after running the tests
afterAll(async () => {
  await new Promise(resolve => setTimeout(() => {
    resolve();
  }, 1000)); // Wait for 1 second to allow pending requests to complete
  app.close(); // Close the server
});

test('GET / responds with "Hello, World!"', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello, World!');
});
