import { trackTypeEnum, TrackTypeValue } from '../../../../Domain/values/common/TrackType';
import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';
import { converter } from '../converter';
import { ConverterTable } from '../types/ConverterTable';

export const oudTrackTypeEnum = {
  [trackTypeEnum.in_track]: '0',
  [trackTypeEnum.starting_side]: '1',
  [trackTypeEnum.end_side]: '2',
  [trackTypeEnum.externals]: '3',
} as const;

export type OudTrackType = typeof oudTrackTypeEnum[keyof typeof oudTrackTypeEnum];

const oudTrackTypeTable: ConverterTable<TrackTypeValue, OudTrackType> = [
  {
    key: trackTypeEnum.in_track,
    value: oudTrackTypeEnum.in_track,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
  {
    key: trackTypeEnum.starting_side,
    value: oudTrackTypeEnum.starting_side,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
  {
    key: trackTypeEnum.end_side,
    value: oudTrackTypeEnum.end_side,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
  {
    key: trackTypeEnum.externals,
    value: oudTrackTypeEnum.externals,
    // TODO: そのうち使うかも
    since: new OudiaFileTypeVersioning('2', '06'),
  },
];

export const trackTypeConverter = converter<TrackTypeValue, OudTrackType>(oudTrackTypeTable);
