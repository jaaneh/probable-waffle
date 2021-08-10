import request from 'supertest'
import app from '../src/app'

describe('GET /api/v1/products', () => {
  it('should return 404 Not Found', async done => {
    request(app).get('/api/v1/product').expect(404, done)
  })

  it('should return 200 OK', done => {
    request(app)
      .get('/api/v1/products/1')
      .expect(200)
      .end((_, res) => {
        const { id, name, ean, price } = res.body
        expect(id).toEqual(1)
        expect(name).toEqual('Dolor alias voluptas id qui.')
        expect(ean).toEqual('5483313862636')
        expect(price).toEqual(78.48)
        done()
      })
  })
})
