import * as z from 'zod';
import { Langs, ValueLabel } from '../types';

export const trainTypeLineTypeEnum = {
  normal: 'normal',
  dotted: 'dotted',
  dashed: 'dashed',
  dash_dotted: 'dash_dotted',
  two_dot_chain: 'two_dot_chain',
} as const;

export const trainTypeLineTypeLabels: ValueLabel<TrainTypeLineTypeValue>[] = [
  {
    value: trainTypeLineTypeEnum.normal,
    labels: {
      ja: '実線',
      en: 'solid line',
    },
  },
  {
    value: trainTypeLineTypeEnum.dotted,
    labels: {
      ja: '点線',
      en: 'dotted line',
    },
  },
  {
    value: trainTypeLineTypeEnum.dashed,
    labels: {
      ja: '破線',
      en: 'dashed line',
    },
  },
  {
    value: trainTypeLineTypeEnum.dash_dotted,
    labels: {
      ja: '一点鎖線',
      en: 'dash dotted line',
    },
  },
  {
    value: trainTypeLineTypeEnum.two_dot_chain,
    labels: {
      ja: '二点鎖線',
      en: 'two-dot chain line',
    },
  },
];

const translateValueToLabel = (value: TrainTypeLineTypeValue, lang: Langs): string | undefined => {
  const labels = trainTypeLineTypeLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

export const trainTypeLineTypeSchema = z.union([
  z.literal(trainTypeLineTypeEnum.normal),
  z.literal(trainTypeLineTypeEnum.dotted),
  z.literal(trainTypeLineTypeEnum.dashed),
  z.literal(trainTypeLineTypeEnum.dash_dotted),
  z.literal(trainTypeLineTypeEnum.two_dot_chain),
]);

export type TrainTypeLineTypeValue = z.infer<typeof trainTypeLineTypeSchema>;

export class TrainTypeLineType {
  constructor(public readonly value: TrainTypeLineTypeValue) {
    trainTypeLineTypeSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
