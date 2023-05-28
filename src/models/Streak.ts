import { StHandling } from './StHandling';

/**
 * Class that implements train operation called "streak".
 */
export class Streak {
  /**
   * 運用番号
   *
   * Train operation number
   *
   * @type {string}
   */
  private _operationNum: string = '';
  public get operationNum(): string {
    return this._operationNum;
  }
  public set operationNum(v: string) {
    this._operationNum = v;
  }
  /**
   * 列車種別を格納する配列のindex
   *
   * Index of array storing train type (`Array<TrainType>`)
   *
   * @type {number}
   */
  private _typeIdx: number = 0;
  public get typeIdx(): number {
    return this._typeIdx;
  }
  public set typeIdx(v: number) {
    this._typeIdx = v;
  }
  /**
   * 列車名
   *
   * train name
   *
   * @type {string}
   */
  private _name: string = '';
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  /**
   * 号数
   *
   * train No.
   *
   * @type {string}
   */
  private _no?: string | undefined;
  public get no(): string | undefined {
    return this._no;
  }
  public set no(v: string | undefined) {
    this._no = v;
  }
  /**
   * 行き先駅の配列Index
   *
   * Destination index of `Array<Station>`
   *
   * @type {number}
   */
  private _destIdx: number = 0;
  public get destIdx(): number {
    return this._destIdx;
  }
  public set destIdx(v: number) {
    this._destIdx = v;
  }
  /**
   * 各駅の発着を格納する配列
   *
   * An array storing the arrival and departure handling of each station.
   *
   * @type {Array<StHandling>}
   */
  private _stHandlings: Array<StHandling> = new Array<StHandling>();
  public get stHandlings(): Array<StHandling> {
    return this._stHandlings;
  }
  public set stHandlings(v: Array<StHandling>) {
    this._stHandlings = v;
  }
  /**
   * 備考情報
   *
   * additional comment
   *
   * @type {string}
   */
  private _comment: string = '';
  public get comment(): string {
    return this._comment;
  }
  public set comment(v: string) {
    this._comment = v;
  }

  toJSON() {
    return {
      operationNum: this.operationNum,
      typeIdx: this.typeIdx,
      name: this.name,
      no: this.no,
      destIdx: this.destIdx,
      stHandlings: this.stHandlings.map((v) => v.toJSON()),
      comment: this.comment,
    };
  }
}
