import routes from '@/routes';
import { NODE_ENV } from '@core/config';
import fastify from 'fastify';

function bootstrap() {
  const server = fastify({
    logger: {
      transport:
        NODE_ENV === 'development'
          ? {
              target: 'pino-pretty',
              options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
              },
            }
          : undefined,
    },
  });

  server.get('/a', () => {
    return 'hello asfd122323423';
  });

  server.get('/ping', async () => {
    return 'pong\n';
  });

  server.register(routes, { prefix: 'api' });

  return server;
}

export default bootstrap;
