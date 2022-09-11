import { NotFoundError } from '@core/errors';
import { RouteHandler } from 'fastify';

export const getJobs: RouteHandler<{
  Querystring: { hasError: string };
}> = async (req) => {
  if (req.query.hasError === 'true') {
    throw new NotFoundError('oops!?');
  }
  return [
    {
      date: new Date(2022, 9, 3),
    },
  ];
};
