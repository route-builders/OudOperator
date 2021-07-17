import * as z from 'zod';
import { crossingCheckRuleActionHandlingTypeSchema } from './CrossingCheckRuleActionHandlingType';
import { crossingCheckRuleActionTypeSchema } from './CrossingCheckRuleActionType';
import { crossingCheckRuleTrackSetSchema } from './CrossingCheckRuleTrackSet';

/**
 * @var crossingCheckRuleAfterActionSchema - 後動作の zod schema
 */
export const crossingCheckRuleAfterActionSchema = z.object({
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
 * @type crossingCheckRuleAfterActionValue - The native type of crossing-check-rule 後動作.
 */
export type CrossingCheckRuleAfterActionValue = z.infer<typeof crossingCheckRuleAfterActionSchema>;

/**
 * @class CrossingCheckRuleAfterAction - The value-object means crossing-check-rule 後動作.
 *
 * @supports oudiasecond v2.06
 */
export class CrossingCheckRuleAfterAction {
  constructor(public readonly value: CrossingCheckRuleAfterActionValue) {
    crossingCheckRuleAfterActionSchema.parse(value);
    Object.freeze(this);
  }
}
