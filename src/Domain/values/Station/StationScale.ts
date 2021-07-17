import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var stationScaleEnum
 *
 * 駅規模
 */
export const stationScaleEnum = {
  normal: 'normal',
  terminal: 'terminal',
} as const;

/**
 * @var stationScaleLabels
 */
export const stationScaleLabels: ValueLabel<StationScaleValue>[] = [
  {
    value: stationScaleEnum.normal,
    labels: {
      ja: '一般駅',
      en: 'normal',
    },
  },
  {
    value: stationScaleEnum.terminal,
    labels: {
      ja: '主要駅',
      en: 'terminal',
    },
  },
];

const translateValueToLabel = (value: StationScaleValue, lang: Langs): string | undefined => {
  const labels = stationScaleLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var stationScaleSchema - The zod schema of 駅時刻形式.
 */
export const stationScaleSchema = z.union([z.literal(stationScaleEnum.normal), z.literal(stationScaleEnum.terminal)]);

/**
 * @type stationScaleValue - The native type of 駅時刻形式.
 */
export type StationScaleValue = z.infer<typeof stationScaleSchema>;

/**
 * @class StationScale - The value-object means 駅時刻形式.
 *
 * @supports oudia
 * @original Station[].Ekijikokukeisiki
 */
export class StationScale {
  constructor(public readonly value: StationScaleValue) {
    stationScaleSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
