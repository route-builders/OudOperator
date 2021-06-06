import { Time } from '../Time';

export interface EndpointWork {
  worktype: number;
  track?: number;
  departure?: Time;
  arrival?: Time;
  operationNum?: string;
}
