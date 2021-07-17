import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var trackTypeEnum - 番線タイプのenum
 *
 * in_track ...       番線
 * starting_side ...  駅到着/出発(起点側)
 * end_side ...       駅到着/出発(終点側)
 * externals ...      路線外発着駅
 */
export const trackTypeEnum = {
  in_track: 'in_track', // oud2: 0
  starting_side: 'starting_side', // oud2: 1
  end_side: 'end_side', // oud2: 2
  externals: 'externals', // oud2: 3
} as const;

/**
 * @var trackTypeLabels - 番線タイプのラベル定義
 */
export const trackTypeLabels: ValueLabel<TrackTypeValue>[] = [
  {
    value: trackTypeEnum.in_track,
    labels: {
      ja: '番線',
      en: 'in track',
    },
  },
  {
    value: trackTypeEnum.starting_side,
    labels: {
      ja: '駅到着/出発(起点側)',
      en: 'station (starting side)',
    },
  },
  {
    value: trackTypeEnum.end_side,
    labels: {
      ja: '駅到着/出発(終点側)',
      en: 'station (end side)',
    },
  },
  {
    value: trackTypeEnum.externals,
    labels: {
      ja: '路線外発着駅',
      en: 'external station',
    },
  },
];

const translateValueToLabel = (value: TrackTypeValue, lang: Langs): string | undefined => {
  const labels = trackTypeLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var trackTypeSchema - 番線タイプの zod schema
 */
export const trackTypeSchema = z.union([
  z.literal(trackTypeEnum.in_track),
  z.literal(trackTypeEnum.starting_side),
  z.literal(trackTypeEnum.end_side),
  z.literal(trackTypeEnum.externals),
]);

/**
 * @type trackTypeValue - 番線タイプのnative型
 */
export type TrackTypeValue = z.infer<typeof trackTypeSchema>;

/**
 * @class TrackType - 番線タイプの値オブジェクト
 *
 * @supports oudiasecond v2.06
 */
export class TrackType {
  constructor(public readonly value: TrackTypeValue) {
    trackTypeSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
