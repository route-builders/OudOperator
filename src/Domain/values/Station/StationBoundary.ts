import * as z from 'zod';

export const stationBoundaryDefaultValue = false;

/**
 * @var stationBoundarySchema - The zod schema of 駅境界線表示.
 */
export const stationBoundarySchema = z.boolean().default(stationBoundaryDefaultValue);

/**
 * @type stationBoundaryValue - The native type of 駅境界線表示.
 */
export type StationBoundaryValue = z.infer<typeof stationBoundarySchema>;

/**
 * @class StationBoundary - The value-object means 駅境界線表示.
 *
 * @supports oudia
 * @original Station[].Ekijikokukeisiki
 */
export class StationBoundary {
  constructor(public readonly value: StationBoundaryValue = stationBoundaryDefaultValue) {
    stationBoundarySchema.parse(value);
    Object.freeze(this);
  }
}
