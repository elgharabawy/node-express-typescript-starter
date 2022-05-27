import request from 'supertest'

import app, { server } from '../src/index'

describe('Get Endpoints', () => {
  it('Should return 200', async () => {
    const res = await request(app).get('/articles')
    expect(res.statusCode).toEqual(200)
  })
})

afterAll(() => {
  server.close()
})
