import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var stationInboundTrainTimeFormatEnum
 *
 * 上りダイヤグラム列車情報
 */
export const stationInboundTrainTimeFormatEnum = {
  always: 'always',
  only_departures: 'only_departures',
  none: 'none',
} as const;

/**
 * @var stationInboundTrainTimeFormatLabels
 */
export const stationInboundTrainTimeFormatLabels: ValueLabel<StationInboundTrainTimeFormatValue>[] = [
  {
    value: stationInboundTrainTimeFormatEnum.always,
    labels: {
      ja: '発着',
      en: 'always show',
    },
  },
  {
    value: stationInboundTrainTimeFormatEnum.only_departures,
    labels: {
      ja: '下り着時刻',
      en: 'display only on depatrure',
    },
  },
  {
    value: stationInboundTrainTimeFormatEnum.none,
    labels: {
      ja: '上り着時刻',
      en: 'do not show',
    },
  },
];

const translateValueToLabel = (value: StationInboundTrainTimeFormatValue, lang: Langs): string | undefined => {
  const labels = stationInboundTrainTimeFormatLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var stationInboundTrainTimeFormatSchema - The zod schema of 上りダイヤグラム列車情報.
 */
export const stationInboundTrainTimeFormatSchema = z.union([
  z.literal(stationInboundTrainTimeFormatEnum.always),
  z.literal(stationInboundTrainTimeFormatEnum.only_departures),
  z.literal(stationInboundTrainTimeFormatEnum.none),
]);

/**
 * @type stationInboundTrainTimeFormatValue - The native type of 上りダイヤグラム列車情報.
 */
export type StationInboundTrainTimeFormatValue = z.infer<typeof stationInboundTrainTimeFormatSchema>;

/**
 * @class StationInboundTrainTimeFormat - The value-object means 上りダイヤグラム列車情報.
 *
 * @supports oudia
 * @original Station[].Ekijikokukeisiki
 */
export class StationInboundTrainTimeFormat {
  constructor(public readonly value: StationInboundTrainTimeFormatValue) {
    stationInboundTrainTimeFormatSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
