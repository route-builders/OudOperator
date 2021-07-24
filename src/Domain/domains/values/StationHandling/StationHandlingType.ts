import * as z from 'zod';
import { Langs, ValueLabel } from '../types';

export const stationHandlineTypeEnum = {
  normal: 'normal',
  dotted: 'dotted',
  dashed: 'dashed',
  dash_dotted: 'dash_dotted',
  two_dot_chain: 'two_dot_chain',
} as const;

export const stationHandlineTypeLabels: ValueLabel<StationHandlineTypeValue>[] = [
  {
    value: stationHandlineTypeEnum.normal,
    labels: {
      ja: '実線',
      en: 'solid line',
    },
  },
  {
    value: stationHandlineTypeEnum.dotted,
    labels: {
      ja: '点線',
      en: 'dotted line',
    },
  },
  {
    value: stationHandlineTypeEnum.dashed,
    labels: {
      ja: '破線',
      en: 'dashed line',
    },
  },
  {
    value: stationHandlineTypeEnum.dash_dotted,
    labels: {
      ja: '一点鎖線',
      en: 'dash dotted line',
    },
  },
  {
    value: stationHandlineTypeEnum.two_dot_chain,
    labels: {
      ja: '二点鎖線',
      en: 'two-dot chain line',
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
  z.literal(stationHandlineTypeEnum.normal),
  z.literal(stationHandlineTypeEnum.dotted),
  z.literal(stationHandlineTypeEnum.dashed),
  z.literal(stationHandlineTypeEnum.dash_dotted),
  z.literal(stationHandlineTypeEnum.two_dot_chain),
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
