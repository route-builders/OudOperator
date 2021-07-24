import {
  trainTypeLineTypeEnum,
  TrainTypeLineTypeValue,
} from '../../../../Domain/domains/values/TrainType/TrainTypeLineType';
import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';
import { converter } from '../converter';
import { ConverterTable } from '../types/ConverterTable';

export const oudTrainTypeLineTypeEnum = {
  [trainTypeLineTypeEnum.normal]: 'SenStyle_Jissen',
  [trainTypeLineTypeEnum.dotted]: 'SenStyle_Tensen',
  [trainTypeLineTypeEnum.dashed]: 'SenStyle_Hasen',
  [trainTypeLineTypeEnum.dash_dotted]: 'SenStyle_Ittensasen',
} as const;

export type OudTrainTypeLineType = typeof oudTrainTypeLineTypeEnum[keyof typeof oudTrainTypeLineTypeEnum];

const oudTrainTypeLineTypeTable: ConverterTable<TrainTypeLineTypeValue, OudTrainTypeLineType> = [
  {
    key: trainTypeLineTypeEnum.normal,
    value: oudTrainTypeLineTypeEnum.normal,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: trainTypeLineTypeEnum.dotted,
    value: oudTrainTypeLineTypeEnum.dotted,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: trainTypeLineTypeEnum.dashed,
    value: oudTrainTypeLineTypeEnum.dashed,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: trainTypeLineTypeEnum.dash_dotted,
    value: oudTrainTypeLineTypeEnum.dash_dotted,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('1', '00'),
  },
];

export const trainTypeLineTypeConverter = converter<TrainTypeLineTypeValue, OudTrainTypeLineType>(
  oudTrainTypeLineTypeTable
);
