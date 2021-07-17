import * as z from 'zod';
import { externalStationIDSchema } from '../common/ExternalStationID';
import { stationIDSchema } from '../common/StationID';
import { trackIDSchema } from '../common/TrackID';
import { trackTypeEnum } from '../common/TrackType';

/**
 * @var crossingCheckRuleTrackSetSchema - The zod schema of crossing-check-rule TrackSet.
 */
export const crossingCheckRuleTrackSetSchema = z.union([
  z.object({
    trackType: z.literal(trackTypeEnum.in_track),
    trackID: trackIDSchema,
  }),
  z.object({
    trackType: z.union([z.literal(trackTypeEnum.starting_side), z.literal(trackTypeEnum.end_side)]),
    stationID: stationIDSchema,
  }),
  z.object({
    trackType: z.union([z.literal(trackTypeEnum.starting_side), z.literal(trackTypeEnum.end_side)]),
    externalStationID: externalStationIDSchema,
  }),
]);

/**
 * @type crossingCheckRuleTrackSetValue - The native type of crossing-check-rule TrackSet.
 */
export type CrossingCheckRuleTrackSetValue = z.infer<typeof crossingCheckRuleTrackSetSchema>;

/**
 * @class CrossingCheckRuleTrackSet - The value-object means crossing-check-rule TrackSet.
 *
 * @supports oudiasecond v2.06
 * @original CrossingCheckRule[].Enable
 */
export class CrossingCheckRuleTrackSet {
  constructor(public readonly value: CrossingCheckRuleTrackSetValue) {
    crossingCheckRuleTrackSetSchema.parse(value);
    Object.freeze(this);
  }
}
