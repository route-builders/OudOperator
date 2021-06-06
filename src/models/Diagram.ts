import { Streak } from './Streak';

export class Diagram {
  /**
   * ダイヤグラム名
   */
  private _name: string = '';
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  /**
   * 下り運用
   *
   * Train operation in the downward direction
   */
  private _downStreaks: Array<Streak> = new Array<Streak>();
  public get downStreaks(): Array<Streak> {
    return this._downStreaks;
  }
  public set downStreaks(v: Array<Streak>) {
    this._downStreaks = v;
  }
  /**
   * 上り運用
   *
   * Train operation in the up direction
   */
  private _upStreaks: Array<Streak> = new Array<Streak>();
  public get upStreaks(): Array<Streak> {
    return this._upStreaks;
  }
  public set upStreaks(v: Array<Streak>) {
    this._upStreaks = v;
  }

  toJSON() {
    return {
      name: this.name,
      downStreaks: this.downStreaks,
      upStreaks: this.upStreaks,
    };
  }
}
