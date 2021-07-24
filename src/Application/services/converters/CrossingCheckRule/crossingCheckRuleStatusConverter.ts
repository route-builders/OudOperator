import {
  crossingCheckRuleStatusEnum,
  CrossingCheckRuleStatusValue,
} from '../../../../Domain/domains/values/CrossingCheckRule/CrossingCheckRuleStatus';
import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';
import { converter } from '../converter';
import { ConverterTable } from '../types/ConverterTable';

export const oudCrossingCheckRuleStatusEnum = {
  [crossingCheckRuleStatusEnum.disabled]: '0',
  [crossingCheckRuleStatusEnum.enabled]: '1',
} as const;

export type OudCrossingCheckRuleStatus =
  typeof oudCrossingCheckRuleStatusEnum[keyof typeof oudCrossingCheckRuleStatusEnum];

const oudCrossingCheckRuleStatusTable: ConverterTable<CrossingCheckRuleStatusValue, OudCrossingCheckRuleStatus> = [
  {
    key: crossingCheckRuleStatusEnum.disabled,
    value: oudCrossingCheckRuleStatusEnum.disabled,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
  {
    key: crossingCheckRuleStatusEnum.enabled,
    value: oudCrossingCheckRuleStatusEnum.enabled,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
];

export const crossingCheckRuleStatusConverter = converter<CrossingCheckRuleStatusValue, OudCrossingCheckRuleStatus>(
  oudCrossingCheckRuleStatusTable
);
