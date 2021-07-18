import {
  stationTrainTimeFormatEnum,
  StationTrainTimeFormatValue,
} from '../../../../Domain/values/Station/StationTrainTimeFormat';
import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';
import { converter } from '../converter';
import { ConverterTable } from '../types/ConverterTable';

export const oudStationTrainTimeFormatEnum = {
  [stationTrainTimeFormatEnum.always]: 'DiagramRessyajouhouHyouji_Anytime',
  // FIXME: 指定子不明
  [stationTrainTimeFormatEnum.only_departures]: '_',
  [stationTrainTimeFormatEnum.none]: 'DiagramRessyajouhouHyouji_Not',
} as const;

export type OudStationTrainTimeFormat =
  typeof oudStationTrainTimeFormatEnum[keyof typeof oudStationTrainTimeFormatEnum];

const oudStationTrainTimeFormatTable: ConverterTable<StationTrainTimeFormatValue, OudStationTrainTimeFormat> = [
  {
    key: stationTrainTimeFormatEnum.always,
    value: oudStationTrainTimeFormatEnum.always,
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: stationTrainTimeFormatEnum.only_departures,
    value: oudStationTrainTimeFormatEnum.only_departures,
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: stationTrainTimeFormatEnum.none,
    value: oudStationTrainTimeFormatEnum.none,
    since: new OudiaFileTypeVersioning('1', '00'),
  },
];

export const stationTrainTimeFormatConverter = converter<StationTrainTimeFormatValue, OudStationTrainTimeFormat>(
  oudStationTrainTimeFormatTable
);
