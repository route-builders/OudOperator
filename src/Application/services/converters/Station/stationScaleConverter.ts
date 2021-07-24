import { stationScaleEnum, StationScaleValue } from '../../../../Domain/domains/values/Station/StationScale';
import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';
import { converter } from '../converter';
import { ConverterTable } from '../types/ConverterTable';

export const oudStationScaleEnum = {
  [stationScaleEnum.normal]: 'Ekikibo_Ippan',
  [stationScaleEnum.terminal]: 'Ekikibo_Syuyou',
} as const;

export type OudStationScale = typeof oudStationScaleEnum[keyof typeof oudStationScaleEnum];

const oudStationScaleTable: ConverterTable<StationScaleValue, OudStationScale> = [
  {
    key: stationScaleEnum.normal,
    value: oudStationScaleEnum.normal,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: stationScaleEnum.terminal,
    value: oudStationScaleEnum.terminal,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('1', '00'),
  },
];

export const stationScaleConverter = converter<StationScaleValue, OudStationScale>(oudStationScaleTable);
