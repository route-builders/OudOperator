import * as z from 'zod';
import { Langs, ValueLabel } from '../types/ValueLabel';

/**
 * @var stationTimeFormatEnum
 *
 * 駅時刻形式
 *
 * time display format at the station
 *      - arrival_and_departure ... shown in arrival and departure
 *      - outbound_arrival ... only arrival of outbound line
 *      - inbound_arrival ... only arrival of inbound line
 *      - outbound_arrival_and_departure ... arrival and departure of outbound line
 *      - inbound_arrival_and_departure ... arrival and departure of inbound line
 *      - only_arrival  ... only arrival
 *      - only_departure  ... only departure
 */
export const stationTimeFormatEnum = {
  arrival_and_departure: 'arrival_and_departure',
  outbound_arrival: 'outbound_arrival',
  inbound_arrival: 'inbound_arrival',
  outbound_arrival_and_departure: 'outbound_arrival_and_departure',
  inbound_arrival_and_departure: 'inbound_arrival_and_departure',
  only_arrival: 'only_arrival',
  only_departure: 'only_departure',
} as const;

/**
 * @var stationTimeFormatLabels
 */
export const stationTimeFormatLabels: ValueLabel<StationTimeFormatValue>[] = [
  {
    value: stationTimeFormatEnum.arrival_and_departure,
    labels: {
      ja: '発着',
      en: 'shown in arrival and departure',
    },
  },
  {
    value: stationTimeFormatEnum.outbound_arrival,
    labels: {
      ja: '下り着時刻',
      en: 'only arrival of outbound line',
    },
  },
  {
    value: stationTimeFormatEnum.inbound_arrival,
    labels: {
      ja: '上り着時刻',
      en: 'only arrival of inbound line',
    },
  },
  {
    value: stationTimeFormatEnum.outbound_arrival_and_departure,
    labels: {
      ja: '下り発着',
      en: 'arrival and departure of outbound line',
    },
  },
  {
    value: stationTimeFormatEnum.inbound_arrival_and_departure,
    labels: {
      ja: '上り発着',
      en: 'arrival and departure of inbound line',
    },
  },
  {
    value: stationTimeFormatEnum.only_arrival,
    labels: {
      ja: '着時刻',
      en: 'only arrival',
    },
  },
  {
    value: stationTimeFormatEnum.only_departure,
    labels: {
      ja: '発時刻',
      en: 'only departure',
    },
  },
];

const translateValueToLabel = (value: StationTimeFormatValue, lang: Langs): string | undefined => {
  const labels = stationTimeFormatLabels.find((set) => set.value === value)?.labels;
  if (labels) {
    return labels[lang];
  } else {
    return;
  }
};

/**
 * @var stationTimeFormatSchema - The zod schema of 駅時刻形式.
 */
export const stationTimeFormatSchema = z.union([
  z.literal(stationTimeFormatEnum.arrival_and_departure),
  z.literal(stationTimeFormatEnum.outbound_arrival),
  z.literal(stationTimeFormatEnum.inbound_arrival),
  z.literal(stationTimeFormatEnum.outbound_arrival_and_departure),
  z.literal(stationTimeFormatEnum.inbound_arrival_and_departure),
  z.literal(stationTimeFormatEnum.only_arrival),
  z.literal(stationTimeFormatEnum.only_departure),
]);

/**
 * @type stationTimeFormatValue - The native type of 駅時刻形式.
 */
export type StationTimeFormatValue = z.infer<typeof stationTimeFormatSchema>;

/**
 * @class StationTimeFormat - The value-object means 駅時刻形式.
 *
 * @supports oudia
 * @original Station[].Ekijikokukeisiki
 */
export class StationTimeFormat {
  constructor(public readonly value: StationTimeFormatValue) {
    stationTimeFormatSchema.parse(value);
    Object.freeze(this);
  }

  label(lang: Langs): string | undefined {
    return translateValueToLabel(this.value, lang);
  }
}
