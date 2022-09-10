import { BaseError } from './base-error';

export class NotFoundError<T> extends BaseError<T> {
  constructor(msg = 'not found', body?: T | null) {
    super(msg, 404, body);
  }
}
