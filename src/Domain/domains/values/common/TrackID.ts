import * as z from 'zod';

/**
 * @var trackIDSchema - 番線IDのzod schema
 */
export const trackIDSchema = z.string().uuid();

/**
 * @type trackIDValue - 番線IDの native型
 */
export type TrackIDValue = z.infer<typeof trackIDSchema>;

/**
 * @class TrackID - 番線IDを表す値オブジェクト
 *
 * @supports oudiasecond v2.06
 */
export class TrackID {
  constructor(public readonly value: TrackIDValue) {
    trackIDSchema.parse(value);
    Object.freeze(this);
  }
}
