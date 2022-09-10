export class BaseError<T> extends Error {
  constructor(msg: string, public statusCode: number, public body?: T | null) {
    super(msg);
  }
}
