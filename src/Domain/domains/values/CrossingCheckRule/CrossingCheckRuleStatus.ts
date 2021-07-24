import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var crossingCheckRuleStatusEnum
 *
 * disabled ... this rule is disabled.
 * enabled ... this rule is enabled.
 */
export const crossingCheckRuleStatusEnum = {
  disabled: 'disabled', // oud2: 0,
  enabled: 'enabled', // oud2: 1,
} as const;

/**
 * @var crossingCheckRuleStatusLabels
 */
export const crossingCheckRuleStatusLabels: ValueLabel<CrossingCheckRuleStatusValue>[] = [
  {
    value: crossingCheckRuleStatusEnum.disabled,
    labels: {
      ja: '無効',
      en: 'disabled',
    },
  },
  {
    value: crossingCheckRuleStatusEnum.enabled,
    labels: {
      ja: '有効',
      en: 'enabled',
    },
  },
];

const translateValueToLabel = (value: CrossingCheckRuleStatusValue, lang: Langs): string | undefined => {
  const labels = crossingCheckRuleStatusLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var crossingCheckRuleStatusSchema - The zod schema of crossing-check-rule Status.
 */
export const crossingCheckRuleStatusSchema = z.union([
  z.literal(crossingCheckRuleStatusEnum.disabled),
  z.literal(crossingCheckRuleStatusEnum.enabled),
]);

/**
 * @type crossingCheckRuleStatusValue - The native type of crossing-check-rule Status.
 */
export type CrossingCheckRuleStatusValue = z.infer<typeof crossingCheckRuleStatusSchema>;

/**
 * @class CrossingCheckRuleStatus - The value-object means crossing-check-rule Status.
 *
 * @supports oudiasecond v2.06
 * @original CrossingCheckRule[].Enable
 */
export class CrossingCheckRuleStatus {
  constructor(public readonly value: CrossingCheckRuleStatusValue) {
    crossingCheckRuleStatusSchema.parse(value);
    Object.freeze(this);
  }

  get isDisabled(): boolean {
    return this.value === crossingCheckRuleStatusEnum.disabled;
  }

  get isEnabled(): boolean {
    return this.value === crossingCheckRuleStatusEnum.enabled;
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
