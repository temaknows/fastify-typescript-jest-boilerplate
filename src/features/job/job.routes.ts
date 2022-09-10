import { FastifyInstance, RouteHandlerMethod, RouteOptions } from 'fastify';

import * as JobController from './job.controller';

const routes: RouteOptions[] = [
  {
    method: 'GET',
    url: '/',
    handler: JobController.getJobs as RouteHandlerMethod,
  },
];

export const jobRoutes = async (fastify: FastifyInstance) => {
  for (const route of routes) {
    fastify.route(route);
  }
};
