import * as z from 'zod';
import { trainTypeShortNameSchema } from './TrainTypeShortName';

export const trainTypeStopMarkSchema = z.boolean();

export type TrainTypeStopMarkValue = z.infer<typeof trainTypeStopMarkSchema>;

export class TrainTypeStopMark {
  constructor(public readonly value: TrainTypeStopMarkValue) {
    trainTypeShortNameSchema.parse(value);
    Object.freeze(this);
  }
}
