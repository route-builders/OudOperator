import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var crossingCheckRuleActionHandlingTypeEnum
 *
 * stopping ... this rule is on stopping.
 * passing ... this rule is on passing.
 */
export const crossingCheckRuleActionHandlingTypeEnum = {
  stopping: 'stopping', // oud2: 0,
  passing: 'passing', // oud2: 1,
} as const;

/**
 * @var crossingCheckRuleActionHandlingTypeLabels
 */
export const crossingCheckRuleActionHandlingTypeLabels: ValueLabel<CrossingCheckRuleActionHandlingTypeValue>[] = [
  {
    value: crossingCheckRuleActionHandlingTypeEnum.stopping,
    labels: {
      ja: '停車',
      en: 'stopping',
    },
  },
  {
    value: crossingCheckRuleActionHandlingTypeEnum.passing,
    labels: {
      ja: '通過',
      en: 'passing',
    },
  },
];

const translateValueToLabel = (value: CrossingCheckRuleActionHandlingTypeValue, lang: Langs): string | undefined => {
  const labels = crossingCheckRuleActionHandlingTypeLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var crossingCheckRuleActionHandlingTypeSchema - The zod schema of crossing-check-rule ActionHandlingType.
 */
export const crossingCheckRuleActionHandlingTypeSchema = z.union([
  z.literal(crossingCheckRuleActionHandlingTypeEnum.stopping),
  z.literal(crossingCheckRuleActionHandlingTypeEnum.passing),
]);

/**
 * @type crossingCheckRuleActionHandlingTypeValue - The native type of crossing-check-rule ActionHandlingType.
 */
export type CrossingCheckRuleActionHandlingTypeValue = z.infer<typeof crossingCheckRuleActionHandlingTypeSchema>;

/**
 * @class CrossingCheckRuleActionHandlingType - The value-object means crossing-check-rule ActionHandlingType.
 *
 * @supports oudiasecond v2.06
 */
export class CrossingCheckRuleActionHandlingType {
  constructor(public readonly value: CrossingCheckRuleActionHandlingTypeValue) {
    crossingCheckRuleActionHandlingTypeSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
