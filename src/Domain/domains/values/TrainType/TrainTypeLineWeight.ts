import * as z from 'zod';
import { Langs, ValueLabel } from '../types';

export const trainTypeLineWeightEnum = {
  normal: 'normal',
  bold: 'bold',
} as const;

export const trainTypeLineWeightLabels: ValueLabel<TrainTypeLineWeightValue>[] = [
  {
    value: trainTypeLineWeightEnum.normal,
    labels: {
      ja: '通常線',
      en: 'normal weight',
    },
  },
  {
    value: trainTypeLineWeightEnum.bold,
    labels: {
      ja: '太線',
      en: 'bold',
    },
  },
];

const translateValueToLabel = (value: TrainTypeLineWeightValue, lang: Langs): string | undefined => {
  const labels = trainTypeLineWeightLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

export const trainTypeLineWeightSchema = z.union([
  z.literal(trainTypeLineWeightEnum.normal),
  z.literal(trainTypeLineWeightEnum.bold),
]);

export type TrainTypeLineWeightValue = z.infer<typeof trainTypeLineWeightSchema>;

export class TrainTypeLineWeight {
  constructor(public readonly value: TrainTypeLineWeightValue) {
    trainTypeLineWeightSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
