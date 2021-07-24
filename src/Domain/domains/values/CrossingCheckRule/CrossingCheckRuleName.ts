import * as z from 'zod';
import { onelineStringSchema } from '../common/OnelineString';

/**
 * @var crossingCheckRuleNameSchema - The zod schema of 交差支障判定ルール名
 * 共通の単行文字列スキーマを用いている
 *
 * @see src/Domain/values/common/OnelineString.ts
 */
export const crossingCheckRuleNameSchema = onelineStringSchema;

/**
 * @type crossingCheckRuleNameValue - The native type of 交差支障判定ルール名
 */
export type CrossingCheckRuleNameValue = z.infer<typeof crossingCheckRuleNameSchema>;

/**
 * @class CrossingCheckRuleName - The value-object means 交差支障判定ルール名
 *
 * @supports oudiasecond v2.06
 * @original CrossingCheckRule[].Caption
 */
export class CrossingCheckRuleName {
  constructor(public readonly value: CrossingCheckRuleNameValue) {
    crossingCheckRuleNameSchema.parse(value);
    Object.freeze(this);
  }
}
