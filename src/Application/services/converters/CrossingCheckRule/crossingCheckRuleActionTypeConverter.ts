import {
  crossingCheckRuleActionTypeEnum,
  CrossingCheckRuleActionTypeValue,
} from '../../../../Domain/domains/values/CrossingCheckRule/CrossingCheckRuleActionType';
import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';
import { converter } from '../converter';
import { ConverterTable } from '../types/ConverterTable';

export const oudCrossingCheckRuleActionTypeEnum = {
  [crossingCheckRuleActionTypeEnum.departure]: '0',
  [crossingCheckRuleActionTypeEnum.arrival]: '1',
} as const;

export type OudCrossingCheckRuleActionType =
  typeof oudCrossingCheckRuleActionTypeEnum[keyof typeof oudCrossingCheckRuleActionTypeEnum];

const oudCrossingCheckRuleActionTypeTable: ConverterTable<
  CrossingCheckRuleActionTypeValue,
  OudCrossingCheckRuleActionType
> = [
  {
    key: crossingCheckRuleActionTypeEnum.departure,
    value: oudCrossingCheckRuleActionTypeEnum.departure,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
  {
    key: crossingCheckRuleActionTypeEnum.arrival,
    value: oudCrossingCheckRuleActionTypeEnum.arrival,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
];

export const crossingCheckRuleActionTypeConverter = converter<
  CrossingCheckRuleActionTypeValue,
  OudCrossingCheckRuleActionType
>(oudCrossingCheckRuleActionTypeTable);
