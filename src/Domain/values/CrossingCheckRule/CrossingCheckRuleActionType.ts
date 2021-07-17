import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var crossingCheckRuleActionTypeEnum
 *
 * departure ... this rule is on departure.
 * arrival ... this rule is on arrival.
 */
export const crossingCheckRuleActionTypeEnum = {
  departure: 'departure', // oud2: 0,
  arrival: 'arrival', // oud2: 1,
} as const;

/**
 * @var crossingCheckRuleActionTypeLabels
 */
export const crossingCheckRuleActionTypeLabels: ValueLabel<CrossingCheckRuleActionTypeValue>[] = [
  {
    value: crossingCheckRuleActionTypeEnum.departure,
    labels: {
      ja: '出発',
      en: 'departure',
    },
  },
  {
    value: crossingCheckRuleActionTypeEnum.arrival,
    labels: {
      ja: '到着',
      en: 'arrival',
    },
  },
];

const translateValueToLabel = (value: CrossingCheckRuleActionTypeValue, lang: Langs): string | undefined => {
  const labels = crossingCheckRuleActionTypeLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var crossingCheckRuleActionTypeSchema - The zod schema of crossing-check-rule ActionType.
 */
export const crossingCheckRuleActionTypeSchema = z.union([
  z.literal(crossingCheckRuleActionTypeEnum.departure),
  z.literal(crossingCheckRuleActionTypeEnum.arrival),
]);

/**
 * @type crossingCheckRuleActionTypeValue - The native type of crossing-check-rule ActionType.
 */
export type CrossingCheckRuleActionTypeValue = z.infer<typeof crossingCheckRuleActionTypeSchema>;

/**
 * @class CrossingCheckRuleActionType - The value-object means crossing-check-rule ActionType.
 *
 * @supports oudiasecond v2.06
 */
export class CrossingCheckRuleActionType {
  constructor(public readonly value: CrossingCheckRuleActionTypeValue) {
    crossingCheckRuleActionTypeSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
