const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect('Hello world!')
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    });
    .end(done);
  });
});
