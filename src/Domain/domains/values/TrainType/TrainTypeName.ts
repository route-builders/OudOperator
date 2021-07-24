import * as z from 'zod';
import { onelineStringSchema } from '../common/OnelineString';

/**
 * @var trainTypeNameSchema - The zod schema of 列車種別名
 * 共通の単行文字列スキーマを用いている
 *
 * @see src/Domain/values/common/OnelineString.ts
 */
export const trainTypeNameSchema = onelineStringSchema;

/**
 * @type trainTypeNameValue - The native type of 列車種別名
 */
export type TrainTypeNameValue = z.infer<typeof trainTypeNameSchema>;

/**
 * @class TrainTypeName - The value-object means 列車種別名
 *
 * @supports oudia
 * @original Ressyasyubetsu[].Syubetsumei
 */
export class TrainTypeName {
  constructor(public readonly value: TrainTypeNameValue) {
    trainTypeNameSchema.parse(value);
    Object.freeze(this);
  }
}
