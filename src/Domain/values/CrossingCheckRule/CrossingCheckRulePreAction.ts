import * as z from 'zod';
import { crossingCheckRuleActionHandlingTypeSchema } from './CrossingCheckRuleActionHandlingType';
import { crossingCheckRuleActionTypeSchema } from './CrossingCheckRuleActionType';
import { crossingCheckRuleTrackSetSchema } from './CrossingCheckRuleTrackSet';

/**
 * @var crossingCheckRulePreActionSchema - 前動作の zod schema
 */
export const crossingCheckRulePreActionSchema = z.object({
  /** @original CrossingCheckRule[].BeforeFromTrackContentCont */
  fromTracks: z.array(crossingCheckRuleTrackSetSchema),
  /** @original CrossingCheckRule[].BeforeToTrackContentCont */
  toTracks: z.array(crossingCheckRuleTrackSetSchema),
  /** @original CrossingCheckRule[].BeforeIsArrival */
  type: crossingCheckRuleActionTypeSchema,
  /** @original CrossingCheckRule[].BeforeIsTsuuka */
  handling: crossingCheckRuleActionHandlingTypeSchema,
});

/**
 * @type crossingCheckRulePreActionValue - The native type of crossing-check-rule 前動作.
 */
export type CrossingCheckRulePreActionValue = z.infer<typeof crossingCheckRulePreActionSchema>;

/**
 * @class CrossingCheckRulePreAction - The value-object means crossing-check-rule 前動作.
 *
 * @supports oudiasecond v2.06
 */
export class CrossingCheckRulePreAction {
  constructor(public readonly value: CrossingCheckRulePreActionValue) {
    crossingCheckRulePreActionSchema.parse(value);
    Object.freeze(this);
  }
}
