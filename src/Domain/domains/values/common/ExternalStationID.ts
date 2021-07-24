import * as z from 'zod';

/**
 * @var externalStationIDSchema - 路線外発着駅IDの zod schema
 */
export const externalStationIDSchema = z.string().uuid();

/**
 * @type externalStationIDValue - 路線外発着駅IDのnative型
 */
export type ExternalStationIDValue = z.infer<typeof externalStationIDSchema>;

/**
 * @class ExternalStationID - 路線外発着駅IDを表す値オブジェクト
 *
 * @supports oudiasecond v1.05
 */
export class ExternalStationID {
  constructor(public readonly value: ExternalStationIDValue) {
    externalStationIDSchema.parse(value);
    Object.freeze(this);
  }
}
