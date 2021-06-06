import { Time } from './Time';

// TODO: bugfix (Where does it come from?)
// import { EndpointWork } from './types/EndpointWork';

/**
 * A class to implement how to handle stations on rail operation.
 */
export class StHandling {
  /**
   * 駅の扱い方
   * - 0  ... 運行なし
   * - 10 ... 停車
   * - 20 ... 通過
   * - 30 ... 経由なし
   * - 40 ...直通
   *
   * Station handling type
   * - 0  ... no operation
   * - 10 ... stop
   * - 20 ... passing through
   * - 30 ... not via
   * - 40 ... direct
   *
   * @type {number}
   */
  private _type: number = 0;
  public get type(): number {
    return this._type;
  }
  public set type(v: number) {
    this._type = v;
  }
  /**
   * 到着時刻
   *
   * arrival time
   *
   * @type {Time}
   */
  private _arrival: Time = new Time();
  public get arrival(): Time {
    return this._arrival;
  }
  public set arrival(v: Time) {
    this._arrival = v;
  }
  /**
   * 発車時刻
   *
   * departure time
   *
   * @type {Time}
   */
  private _departure: Time = new Time();
  public get departure(): Time {
    return this._departure;
  }
  public set departure(v: Time) {
    this._departure = v;
  }
  /**
   * 発着番線
   *
   * Arrival and departure track number
   *
   * @type {number}
   */
  private _track: number = 0;
  public get track(): number {
    return this._track;
  }
  public set track(v: number) {
    this._track = v;
  }

  // TODO: bugfix (Where does it come from?)
  // private _endpointWork: EndpointWork;
  // public get endpointWork(): EndpointWork {
  //   return this._endpointWork;
  // }
  // public set endpointWork(v: EndpointWork) {
  //   this._endpointWork = v;
  // }

  constructor() {
    this.type = 0;
    this.arrival = new Time();
    this.departure = new Time();
  }

  toJSON() {
    return {
      type: this.type,
      arrival: this.arrival.getTime(),
      departure: this.departure.getTime(),
      track: this.track,
    };
  }
}
