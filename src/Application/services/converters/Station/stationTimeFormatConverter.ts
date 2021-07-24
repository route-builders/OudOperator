import {
  stationTimeFormatEnum,
  StationTimeFormatValue,
} from '../../../../Domain/domains/values/Station/StationTimeFormat';
import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';
import { converter } from '../converter';
import { ConverterTable } from '../types/ConverterTable';

export const oudStationTimeFormatEnum = {
  [stationTimeFormatEnum.arrival_and_departure]: 'Jikokukeisiki_Hatsuchaku',
  [stationTimeFormatEnum.outbound_arrival]: 'Jikokukeisiki_KudariChaku',
  [stationTimeFormatEnum.inbound_arrival]: 'Jikokukeisiki_NoboriChaku',
  [stationTimeFormatEnum.only_arrival]: 'Jikokukeisiki_Hatsu',
  [stationTimeFormatEnum.outbound_arrival_and_departure]: 'Jikokukeisiki_KudariHatsuchaku',
  [stationTimeFormatEnum.inbound_arrival_and_departure]: 'Jikokukeisiki_NoboriHatsuchaku',
} as const;

export type OudStationTimeFormat = typeof oudStationTimeFormatEnum[keyof typeof oudStationTimeFormatEnum];

const oudStationTimeFormatTable: ConverterTable<StationTimeFormatValue, OudStationTimeFormat> = [
  {
    key: stationTimeFormatEnum.arrival_and_departure,
    value: oudStationTimeFormatEnum.arrival_and_departure,
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: stationTimeFormatEnum.outbound_arrival,
    value: oudStationTimeFormatEnum.outbound_arrival,
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: stationTimeFormatEnum.inbound_arrival,
    value: oudStationTimeFormatEnum.inbound_arrival,
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: stationTimeFormatEnum.only_arrival,
    value: oudStationTimeFormatEnum.only_arrival,
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: stationTimeFormatEnum.outbound_arrival_and_departure,
    value: oudStationTimeFormatEnum.outbound_arrival_and_departure,
    // .oud には非実装
    since: new OudiaFileTypeVersioning('1', '00'),
  },
  {
    key: stationTimeFormatEnum.inbound_arrival_and_departure,
    value: oudStationTimeFormatEnum.inbound_arrival_and_departure,
    // .oud には非実装
    since: new OudiaFileTypeVersioning('1', '00'),
  },
];

export const stationTimeFormatConverter = converter<StationTimeFormatValue, OudStationTimeFormat>(
  oudStationTimeFormatTable
);
