import routes from '@/routes';
import { NODE_ENV } from '@core/config';
import cors from '@fastify/cors';
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

  server.register(cors, {});

  server.get('/ping', async () => {
    return 'pong\n';
  });

  server.register(routes, { prefix: 'api' });

  return server;
}

export default bootstrap;
