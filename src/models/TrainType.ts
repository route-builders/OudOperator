import { Color } from './Color';

/**
 * A class constituting the train type included in this route.
 */
export class TrainType {
  /**
   * 列車種別名
   *
   * train type name
   *
   * @type {string}
   */
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  /**
   * 種別略称名
   *
   * Abbreviation for train type name
   *
   * @type {string}
   */
  private _shortname: string;
  public get shortname(): string {
    return this._shortname;
  }
  public set shortname(v: string) {
    this._shortname = v;
  }
  /**
   * 種別色
   *
   * Color of train type
   *
   * @type {Color}
   */
  private _trainColor: Color;
  public get trainColor(): Color {
    return this._trainColor;
  }
  public set trainColor(v: Color) {
    this._trainColor = v;
  }
  /**
   * 時刻表フォントのIndex
   *
   * Index of font for time display.
   *
   * @type {number}
   */
  private _fontIdx: number;
  public get fontIdx(): number {
    return this._fontIdx;
  }
  public set fontIdx(v: number) {
    this._fontIdx = v;
  }
  /**
   * 種別の線色
   *
   * Line color of train type
   *
   * @type {Color}
   */
  private _lineColor: Color;
  public get lineColor(): Color {
    return this._lineColor;
  }
  public set lineColor(v: Color) {
    this._lineColor = v;
  }
  /**
   * ダイヤグラム上での線の種類
   *
   * A number of line type when drawing on diagrams
   *
   * - 0  ... normal line        eg. "-------"
   * - 10 ... dotted line        eg. ". . . ."
   * - 20 ... dashed line        eg. "- - - -"
   * - 30 ... dash-dotted line   eg. "-.-.-.-"
   * - 40 ... Two-dot chain line eg. "-..-..-"
   *
   * @type {number}
   */
  private _lineType: number;
  public get lineType(): number {
    return this._lineType;
  }
  public set lineType(v: number) {
    this._lineType = v;
  }
  /**
   * 線の太さ
   *
   * line width when drawn on the diagram
   *
   * @type {number} Numerical value representing thickness. Unit is pixel.
   */
  private _lineWeight: number;
  public get lineWeight(): number {
    return this._lineWeight;
  }
  public set lineWeight(v: number) {
    this._lineWeight = v;
  }

  private _shoudDrawStopMark: boolean;
  public get shoudDrawStopMark(): boolean {
    return this._shoudDrawStopMark;
  }
  public set shoudDrawStopMark(v: boolean) {
    this._shoudDrawStopMark = v;
  }

  constructor() {
    this._name = '';
    this._shortname = '';
    this._trainColor = new Color();
    this._fontIdx = 0;
    this._lineColor = new Color();
    this._lineType = 0;
    this._lineWeight = 0;
    this._shoudDrawStopMark = false;
  }

  /**
   * A static method to convert OuDia value of train line style (in the diagram view) to numeric parameter.
   *
   * @param {string} str
   * @return {number}
   */
  public static lineStyleToInt(str: string): number {
    switch (str) {
      case 'SenStyle_Tensen':
        return 10;
      case 'SenStyle_Hasen':
        return 20;
      default:
        return 0;
    }
  }

  toJSON() {
    return {
      name: this.name,
      shortname: this.shortname,
      trainColor: this.trainColor,
      fontIdx: this.fontIdx,
      lineColor: this.lineColor,
      lineType: this.lineType,
      lineWeight: this.lineWeight,
      shoudDrawStopMark: this.shoudDrawStopMark,
    };
  }
}
