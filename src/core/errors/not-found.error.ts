import createError from '@fastify/error';

export const NotFoundError = createError('NOT_FOUND', '%s Not Found', 404);

export type NotFoundErrorType = ReturnType<typeof NotFoundError>;
