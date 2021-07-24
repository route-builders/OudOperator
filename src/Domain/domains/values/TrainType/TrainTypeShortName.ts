import * as z from 'zod';
import { onelineStringSchema } from '../common/OnelineString';

/**
 * @var trainTypeShortNameSchema - The zod schema of 列車種別 略称
 * 共通の単行文字列スキーマを用いている
 *
 * @see src/Domain/values/common/OnelineString.ts
 */
export const trainTypeShortNameSchema = onelineStringSchema;

/**
 * @type trainTypeShortNameValue - The native type of 列車種別 略称
 */
export type TrainTypeShortNameValue = z.infer<typeof trainTypeShortNameSchema>;

/**
 * @class TrainTypeShortName - The value-object means 列車種別 略称
 *
 * @supports oudia
 * @original Ressyasyubetsu[].Syubetsumei
 */
export class TrainTypeShortName {
  constructor(public readonly value: TrainTypeShortNameValue) {
    trainTypeShortNameSchema.parse(value);
    Object.freeze(this);
  }
}
