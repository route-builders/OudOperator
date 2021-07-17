import * as z from 'zod';
import { onelineStringSchema } from '../common/OnelineString';

/**
 * @var stationNameSchema - The zod schema of 駅名
 * 共通の単行文字列スキーマを用いている
 *
 * @see src/Domain/values/common/OnelineString.ts
 */
export const stationNameSchema = onelineStringSchema;

/**
 * @type stationNameValue - The native type of 駅名
 */
export type StationNameValue = z.infer<typeof stationNameSchema>;

/**
 * @class StationName - The value-object means 駅名
 *
 * @supports oudiasecond v2.06
 * @original Station[].Caption
 */
export class StationName {
  constructor(public readonly value: StationNameValue) {
    stationNameSchema.parse(value);
    Object.freeze(this);
  }
}
