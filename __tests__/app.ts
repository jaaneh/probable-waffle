import request from 'supertest'
import app from '../src/app'

describe('GET /', () => {
  it('should return 404 Not Found', done => {
    request(app).get('/').expect(404, done)
  })
})

describe('GET /does-not-exist', () => {
  it('should return 404 Not Found', async done => {
    request(app).get('/does-not-exist').expect(404, done)
  })
})
