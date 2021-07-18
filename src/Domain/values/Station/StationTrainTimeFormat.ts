import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var stationTrainTimeFormatEnum
 *
 * ダイヤグラム列車情報
 */
export const stationTrainTimeFormatEnum = {
  always: 'always',
  only_departures: 'only_departures',
  none: 'none',
} as const;

/**
 * @var stationTrainTimeFormatLabels
 */
export const stationTrainTimeFormatLabels: ValueLabel<StationTrainTimeFormatValue>[] = [
  {
    value: stationTrainTimeFormatEnum.always,
    labels: {
      ja: '発着',
      en: 'always show',
    },
  },
  {
    value: stationTrainTimeFormatEnum.only_departures,
    labels: {
      ja: '下り着時刻',
      en: 'display only on depatrure',
    },
  },
  {
    value: stationTrainTimeFormatEnum.none,
    labels: {
      ja: '上り着時刻',
      en: 'do not show',
    },
  },
];

const translateValueToLabel = (value: StationTrainTimeFormatValue, lang: Langs): string | undefined => {
  const labels = stationTrainTimeFormatLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var stationTrainTimeFormatSchema - The zod schema of ダイヤグラム列車情報.
 */
export const stationTrainTimeFormatSchema = z.union([
  z.literal(stationTrainTimeFormatEnum.always),
  z.literal(stationTrainTimeFormatEnum.only_departures),
  z.literal(stationTrainTimeFormatEnum.none),
]);

/**
 * @type stationTrainTimeFormatValue - The native type of ダイヤグラム列車情報.
 */
export type StationTrainTimeFormatValue = z.infer<typeof stationTrainTimeFormatSchema>;

/**
 * @class StationTrainTimeFormat - The value-object means ダイヤグラム列車情報.
 *
 * @supports oudia
 * @original Station[].Ekijikokukeisiki
 */
export class StationTrainTimeFormat {
  constructor(public readonly value: StationTrainTimeFormatValue) {
    stationTrainTimeFormatSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
