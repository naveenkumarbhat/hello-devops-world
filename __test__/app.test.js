const request = require('supertest');
const server = require('../index'); // Import the server instance

test('GET / responds with "Hello, World!"', async () => {
  const response = await request(server).get('/'); // Use server instance instead of app
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello, World!');
});
 