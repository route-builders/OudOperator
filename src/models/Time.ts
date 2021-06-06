/**
 * A class for handling time information comfortably
 *
 * @author up-tri
 * @since 1.0
 */
export class Time {
  /**
   * When it is true, it indicates that the time is not defined.
   *
   * @type {boolean}
   */
  public get isNull(): boolean {
    return this.seconds < 0;
  }
  /**
   * The number represented seconds since midnight.
   * If it stores `-1`, means `null`.
   */
  private seconds: number = 0;

  constructor(v?: string | null) {
    if (v === undefined || v === null) {
      this.seconds = -1;
      return;
    }
    this.setTime(v);
  }

  public getTime(): number {
    return this.seconds;
  }

  public setTime(v: string | null) {
    if (v === null || v.match(/^[0-9]{3,6}$/) === null) {
      this.seconds = -1;
      return;
    }
    let time = parseInt(v);
    if (3 <= v.length && v.length <= 4) {
      this.seconds = Math.floor(time / 100) * 3600 + (time % 100) * 60;
    } else if (5 <= v.length && v.length <= 6) {
      this.seconds = Math.floor(time / 10000) * 3600 + Math.floor((time % 10000) / 100) * 60 + (time % 100);
    }
  }
  /**
   * The method to compare large/small with the another `Time` instance.
   * @param {Time} time The `Time` instance to compare
   *
   * @return {integer}
   */
  public compareWith(time: Time): number {
    const difference = this.seconds - time.seconds;
    if (difference < 0) {
      return -1;
    } else if (difference == 0) {
      return 0;
    } else {
      return 1;
    }
  }
  /**
   * The method to get the difference to the another `Time` instance.
   * @param {Time} time The `Time` instance to compare
   *
   * @return {integer} difference
   */
  public differenceTo(time: Time): Time {
    return new Time(((this.seconds - time.seconds) | 0).toString());
  }
}
