import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var stationOutboundTrainTimeFormatEnum
 *
 * 下りダイヤグラム列車情報
 */
export const stationOutboundTrainTimeFormatEnum = {
  always: 'always',
  only_departures: 'only_departures',
  none: 'none',
} as const;

/**
 * @var stationOutboundTrainTimeFormatLabels
 */
export const stationOutboundTrainTimeFormatLabels: ValueLabel<StationOutboundTrainTimeFormatValue>[] = [
  {
    value: stationOutboundTrainTimeFormatEnum.always,
    labels: {
      ja: '発着',
      en: 'always show',
    },
  },
  {
    value: stationOutboundTrainTimeFormatEnum.only_departures,
    labels: {
      ja: '下り着時刻',
      en: 'display only on depatrure',
    },
  },
  {
    value: stationOutboundTrainTimeFormatEnum.none,
    labels: {
      ja: '上り着時刻',
      en: 'do not show',
    },
  },
];

const translateValueToLabel = (value: StationOutboundTrainTimeFormatValue, lang: Langs): string | undefined => {
  const labels = stationOutboundTrainTimeFormatLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var stationOutboundTrainTimeFormatSchema - The zod schema of 下りダイヤグラム列車情報.
 */
export const stationOutboundTrainTimeFormatSchema = z.union([
  z.literal(stationOutboundTrainTimeFormatEnum.always),
  z.literal(stationOutboundTrainTimeFormatEnum.only_departures),
  z.literal(stationOutboundTrainTimeFormatEnum.none),
]);

/**
 * @type stationOutboundTrainTimeFormatValue - The native type of 下りダイヤグラム列車情報.
 */
export type StationOutboundTrainTimeFormatValue = z.infer<typeof stationOutboundTrainTimeFormatSchema>;

/**
 * @class StationOutboundTrainTimeFormat - The value-object means 下りダイヤグラム列車情報.
 *
 * @supports oudia
 * @original Station[].Ekijikokukeisiki
 */
export class StationOutboundTrainTimeFormat {
  constructor(public readonly value: StationOutboundTrainTimeFormatValue) {
    stationOutboundTrainTimeFormatSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
