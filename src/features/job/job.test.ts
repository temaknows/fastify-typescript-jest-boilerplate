import { NotFoundErrorType } from '@/core/errors';
import bootstrapServer from '@/server';
import { FastifyInstance } from 'fastify';

describe('Job', () => {
  let app!: FastifyInstance;

  beforeEach(() => {
    app = bootstrapServer();
  });

  afterEach(() => {
    app.close();
  });

  it('should return [new Date(2022, 09, 03)] when GET /api/v1/job', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/job',
    });

    const body: { date: string }[] = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body).toHaveLength(1);
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          date: new Date(2022, 9, 3).toISOString(),
        }),
      ]),
    );
  });

  it("should throw 404 with msg 'oops' when GET /api/v1/job?hasError=true", async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/job',
      query: { hasError: 'true' },
    });

    const body: NotFoundErrorType = JSON.parse(response.body);

    expect(response.statusCode).toBe(404);
    expect(body.message).toBe('oops!? Not Found');
  });
});
