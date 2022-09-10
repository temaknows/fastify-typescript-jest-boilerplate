import bootstrapServer from '@/server';
import { FastifyInstance } from 'fastify';

describe('Server', () => {
  let app!: FastifyInstance;

  beforeEach(() => {
    app = bootstrapServer();
  });

  afterEach(() => {
    app.close();
  });

  it('should be create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should return 404 when request /', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.statusCode).toBe(404);
  });

  it('should return pong with statusCode 200 when request is ping', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/ping',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toContain('pong');
  });
});
