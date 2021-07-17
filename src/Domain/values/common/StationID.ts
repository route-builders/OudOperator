import * as z from 'zod';

/**
 * @var stationIDSchema - 駅IDの zod schema
 */
export const stationIDSchema = z.string().uuid();

/**
 * @type stationIDValue - 駅IDのnative型
 */
export type StationIDValue = z.infer<typeof stationIDSchema>;

/**
 * @class StationID - 駅IDを表す値オブジェクト
 *
 * @supports oudia
 */
export class StationID {
  constructor(public readonly value: StationIDValue) {
    stationIDSchema.parse(value);
    Object.freeze(this);
  }
}
