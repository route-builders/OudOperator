import dayjs = require('dayjs');
import * as z from 'zod';

/**
 * @var commonTimeSchema - 時刻を表すzod schema
 */
export const commonTimeSchema = z.object({
  h: z.number().min(0).int(),
  m: z.number().min(0).int(),
  s: z.number().min(0).int(),
});

/**
 * @type commonTimeValue - 時刻オブジェクトの native type
 */
export type CommonTimeValue = z.infer<typeof commonTimeSchema>;

/**
 * @class CommonTime - 時刻を表す値オブジェクト
 */
export class CommonTime {
  private readonly MOCK_YEAR = 2020;
  private readonly MOCK_MONTH = 4;
  private readonly MOCK_DATE = 1;

  public readonly _day: dayjs.Dayjs;

  constructor(public readonly value: CommonTimeValue) {
    commonTimeSchema.parse(value);
    const normalized: CommonTimeValue & { isOverMidnight: boolean } = this.normalize(value);
    const date = normalized.isOverMidnight ? this.MOCK_DATE + 1 : this.MOCK_DATE;
    this._day = dayjs(`${this.MOCK_YEAR}-${this.MOCK_MONTH}-${date} ${normalized.h}:${normalized.m}:${normalized.s}`);
    Object.freeze(this);
  }

  private normalize(value: CommonTimeValue): CommonTimeValue & { isOverMidnight: boolean } {
    const s = Math.floor(value.s % 60);
    const m = Math.floor((value.m + value.s / 60) % 60);
    const h = Math.floor((value.h + (value.m + value.s / 60) / 60) % 24);
    const isOverMidnight = value.h + m / 60 >= 24;
    return { h, m, s, isOverMidnight };
  }

  public diff(other: CommonTime): number {
    /**
     * get the difference in milliseconds.
     * @see https://day.js.org/docs/en/display/difference
     */
    const msec = this._day.diff(other._day);
    return msec / 1000;
  }

  private get isOverMidnight(): boolean {
    return this._day.date() !== this.MOCK_DATE;
  }

  get h(): string {
    return ('00' + `${this._day.hour() + (this.isOverMidnight ? 24 : 0)}`).slice(-2);
  }

  get m(): string {
    return this._day.format('mm');
  }

  get s(): string {
    return `${this._day.format('ss')}`;
  }

  toString(): string {
    return `${this.h}:${this.m}:${this.s}`;
  }
}
