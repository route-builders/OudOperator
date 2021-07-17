import * as z from 'zod';

/**
 * @var crossingCheckRuleIntervalSchema - The zod schema of 交差支障判定の時間間隔
 */
export const crossingCheckRuleIntervalSchema = z.number().int().min(1).max(7200);

/**
 * @type crossingCheckRuleIntervalValue - The native type of 交差支障判定の時間間隔
 */
export type CrossingCheckRuleIntervalValue = z.infer<typeof crossingCheckRuleIntervalSchema>;

/**
 * @class CrossingCheckRuleInterval - The value-object means 交差支障判定の時間間隔
 *
 * @supports oudiasecond v2.06
 * @original CrossingCheckRule[].Caption
 */
export class CrossingCheckRuleInterval {
  constructor(public readonly value: CrossingCheckRuleIntervalValue) {
    crossingCheckRuleIntervalSchema.parse(value);
    Object.freeze(this);
  }
}
