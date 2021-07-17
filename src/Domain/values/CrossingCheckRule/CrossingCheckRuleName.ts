import * as z from 'zod';

/**
 * @var crossingCheckRuleNameSchema - The zod schema of 交差支障判定ルール名
 */
export const crossingCheckRuleNameSchema = z.string().min(1);

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
