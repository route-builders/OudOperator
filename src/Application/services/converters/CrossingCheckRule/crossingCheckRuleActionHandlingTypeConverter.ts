import {
  crossingCheckRuleActionHandlingTypeEnum,
  CrossingCheckRuleActionHandlingTypeValue,
} from '../../../../Domain/values/CrossingCheckRule/CrossingCheckRuleActionHandlingType';
import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';
import { converter } from '../converter';
import { ConverterTable } from '../types/ConverterTable';

export const oudCrossingCheckRuleActionHandlingTypeEnum = {
  [crossingCheckRuleActionHandlingTypeEnum.stopping]: '0',
  [crossingCheckRuleActionHandlingTypeEnum.passing]: '1',
} as const;

export type OudCrossingCheckRuleActionHandlingType =
  typeof oudCrossingCheckRuleActionHandlingTypeEnum[keyof typeof oudCrossingCheckRuleActionHandlingTypeEnum];

const oudCrossingCheckRuleActionHandlingTypeTable: ConverterTable<
  CrossingCheckRuleActionHandlingTypeValue,
  OudCrossingCheckRuleActionHandlingType
> = [
  {
    key: crossingCheckRuleActionHandlingTypeEnum.stopping,
    value: oudCrossingCheckRuleActionHandlingTypeEnum.stopping,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
  {
    key: crossingCheckRuleActionHandlingTypeEnum.passing,
    value: oudCrossingCheckRuleActionHandlingTypeEnum.passing,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
];

export const crossingCheckRuleActionHandlingTypeConverter = converter<
  CrossingCheckRuleActionHandlingTypeValue,
  OudCrossingCheckRuleActionHandlingType
>(oudCrossingCheckRuleActionHandlingTypeTable);
