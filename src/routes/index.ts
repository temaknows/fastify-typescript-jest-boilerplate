import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions,
} from 'fastify';

import { jobRoutes } from '../features/job/job.routes';

const routes: Record<string, FastifyPluginCallback> = {
  job: jobRoutes,
};

export default async (
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void,
) => {
  for (const path in routes) {
    const route = routes[path];
    app.register(route, { prefix: `/${path}` });
  }
  done();
};
