export type JobStatus = 'awaiting' | 'done' | 'canceled';

export interface Job {
  date: Date;
  status: JobStatus;
}
