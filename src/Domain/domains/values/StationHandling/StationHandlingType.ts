import * as z from 'zod';
import { Langs, ValueLabel } from '../types';

export const stationHandlineTypeEnum = {
  no_operation: 'no_operation',
  stopping: 'stopping',
  passing: 'passing',
  not_via: 'not_via',
} as const;

export const stationHandlineTypeLabels: ValueLabel<StationHandlineTypeValue>[] = [
  {
    value: stationHandlineTypeEnum.no_operation,
    labels: {
      ja: '運行なし',
      en: 'no operation',
    },
  },
  {
    value: stationHandlineTypeEnum.stopping,
    labels: {
      ja: '停車',
      en: 'stopping',
    },
  },
  {
    value: stationHandlineTypeEnum.passing,
    labels: {
      ja: '通過',
      en: 'passing',
    },
  },
  {
    value: stationHandlineTypeEnum.not_via,
    labels: {
      ja: '経由なし',
      en: 'not via',
    },
  },
];

const translateValueToLabel = (value: StationHandlineTypeValue, lang: Langs): string | undefined => {
  const labels = stationHandlineTypeLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

export const stationHandlineTypeSchema = z.union([
  z.literal(stationHandlineTypeEnum.no_operation),
  z.literal(stationHandlineTypeEnum.stopping),
  z.literal(stationHandlineTypeEnum.passing),
  z.literal(stationHandlineTypeEnum.not_via),
]);

export type StationHandlineTypeValue = z.infer<typeof stationHandlineTypeSchema>;

export class StationHandlineType {
  constructor(public readonly value: StationHandlineTypeValue) {
    stationHandlineTypeSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
