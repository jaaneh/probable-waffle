import request from 'supertest'
import app from '../src/app'

describe('GET /api/v1', () => {
  it('should return 404 Not Found', async done => {
    request(app).get('/api/v1').expect(404, done)
  })
})
