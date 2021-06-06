/**
 * A class that constitutes a facility
 * that can be treated as a station on the operation of a train,
 * such as a station such as a station or a signal field.
 */
export class Station {
  /**
   * 駅名
   *
   * station's name
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
   * 駅時刻形式
   *
   * time display format at the station
   *      - 10 ... shown in arrival and departure
   *      - 20 ... only arrival of outbound line
   *      - 30 ... only arrival of up line
   *      - 0  ... only arrival
   *
   * @type {number}
   */
  private _timeType: number = 0;
  public get timeType(): number {
    return this._timeType;
  }
  public set timeType(v: number) {
    this._timeType = v;
  }
  /**
   * 駅規模
   *
   * station scale
   *
   * @type {number}
   */
  private _scale: number = 0;
  public get scale(): number {
    return this._scale;
  }
  public set scale(v: number) {
    this._scale = v;
  }
  /**
   * 下りダイヤグラム列車情報
   *
   * train-information's (for downward direction) display format
   *
   * @type {number}
   */
  private _trainInfoDown: number = 0;
  public get trainInfoDown(): number {
    return this._trainInfoDown;
  }
  public set trainInfoDown(v: number) {
    this._trainInfoDown = v;
  }
  /**
   * 上りダイヤグラム列車情報
   *
   * train-information's (for up direction) display format
   *
   * @type {number}
   */
  private _trainInfoUp: number = 0;
  public get trainInfoUp(): number {
    return this._trainInfoUp;
  }
  public set trainInfoUp(v: number) {
    this._trainInfoUp = v;
  }
  /**
   * 境界線表示
   *
   * If true, display the boundary.
   *
   * **notice**
   *
   * This parameter is used only in the conventional version.
   *
   * @type {boolean}
   */
  private _boundary: boolean = false;
  public get boundary(): boolean {
    return this._boundary;
  }
  public set boundary(v: boolean) {
    this._boundary = v;
  }
  /**
   * 駅の扱い方（分岐起点、環状終点　など）
   *
   * handling pattern of this station
   * (eg. bifurcation point or starting point of a circular line)
   *
   * **notice**
   *
   * This parameter is not used in the conventional format (.oud) .
   * Used in a file of a different software format (.oud2) .
   *
   * @type {number}
   */
  private _additionalOption: number = 0;
  public get additionalOption(): number {
    return this._additionalOption;
  }
  public set additionalOption(v: number) {
    this._additionalOption = v;
  }
  /**
   * 時刻表下り番線表示
   *
   * If it is set to true, departure / arrival line of the down line are displayed in the timetable.
   *
   * **notice**
   *
   * This parameter is not used in the conventional format (.oud) .
   * Used in a file of a different software format (.oud2) .
   *
   * @type {boolean}
   */
  private _shouldShowLineNumberDown: boolean = false;
  public get shouldShowLineNumberDown(): boolean {
    return this._shouldShowLineNumberDown;
  }
  public set shouldShowLineNumberDown(v: boolean) {
    this._shouldShowLineNumberDown = v;
  }
  /**
   * 時刻表上り番線表示
   *
   * If it is set to true, departure / arrival line of the up line are displayed in the timetable.
   *
   * **notice**
   *
   * This parameter is not used in the conventional format (.oud) .
   * Used in a file of a different software format (.oud2) .
   *
   * @type {boolean}
   */
  private _shouldShowLineNumberUp: boolean = false;
  public get shouldShowLineNumberUp(): boolean {
    return this._shouldShowLineNumberUp;
  }
  public set shouldShowLineNumberUp(v: boolean) {
    this._shouldShowLineNumberUp = v;
  }
  /**
   * 在線表表示
   *
   * If it is set to true, the departure and arrival departure is displayed in the diagram.
   *
   * **notice**
   *
   * This parameter is not used in the conventional format (.oud) .
   * Used in a file of a different software format (.oud2) .
   *
   * @type {boolean}
   */
  private _shouldShowLines: boolean = false;
  public get shouldShowLines(): boolean {
    return this._shouldShowLines;
  }
  public set shouldShowLines(v: boolean) {
    this._shouldShowLines = v;
  }
  /**
   * 番線構成
   *
   * track number configuration of the station
   *
   * **notice**
   *
   * This parameter is not used in the conventional format (.oud) .
   * Used in a file of a different software format (.oud2) .
   *
   * @type { {string, string}[] }
   */
  private _lines: {
    name: string;
    shortname: string;
  }[] = [];
  public get lines(): { name: string; shortname: string }[] {
    return this._lines;
  }
  public set lines(v: { name: string; shortname: string }[]) {
    this._lines = v;
  }
  /**
   * 下り本線のindex
   *
   * main line order of down line
   *
   * **notice**
   *
   * This parameter is not used in the conventional format (.oud) .
   * Used in a file of a different software format (.oud2) .
   *
   * @example
   *
   * ```ts
   * var st = new Station();
   * st.lines = [ {name: "No1", shortname: "1"}, {name: "No2", shortname: "2"} ];
   * // This points to the 0th position of the array, ie "No1".
   * st._mainLineDown = 0;
   * // This points to the 1st position of the array, ie "No2".
   * st._mainLineUp = 1;
   * ```
   *
   * @type {number}
   */
  private _mainLineDown: number = 0;
  public get mainLineDown(): number {
    return this._mainLineDown;
  }
  public set mainLineDown(v: number) {
    this._mainLineDown = v;
  }
  /**
   * 上り本線のindex
   *
   * main line order of up line
   *
   * See Field A for usage of this field
   *
   * **notice**
   *
   * This parameter is not used in the conventional format (.oud) .
   * Used in a file of a different software format (.oud2) .
   *
   * @type {number}
   */
  private _mainLineUp: number = 0;
  public get mainLineUp(): number {
    return this._mainLineUp;
  }
  public set mainLineUp(v: number) {
    this._mainLineUp = v;
  }

  /**
   * A static method to convert OuDia value of display station time type to numeric parameter.
   *
   * @param {string} value A value of property line
   * @return {number} property number as integer
   *                  - 10 ... arrival and departure
   *                  - 20 ... arrival of outbound line
   *                  - 30 ... arrival of up line
   *                  - 0  ... only arrival
   */
  public static timeTypeToInt(value: string): number {
    switch (value) {
      case 'Jikokukeisiki_Hatsuchaku':
        return 10;
      case 'Jikokukeisiki_KudariChaku':
        return 20;
      case 'Jikokukeisiki_NoboriChaku':
        return 30;
      default:
        return 0;
    }
  }
  /**
   * A method of converting the integer value of the station time to the string value of OuDia format.
   *
   * @return {string} station time type value (OuDia format string)
   */
  public parseTimeType(): string {
    switch (this.timeType) {
      case 10:
        return 'Jikokukeisiki_Hatsuchaku';
      case 20:
        return 'Jikokukeisiki_KudariChaku';
      case 30:
        return 'Jikokukeisiki_NoboriChaku';
      default:
        return 'Jikokukeisiki_Hatsu';
    }
  }
  /**
   * A static method to convert OuDia value of station scale to numeric parameter.
   *
   * @param {string} value A value of property line
   * @return {number} property number as integer
   *                  - 10 ... large-scale station ( eg. terminal )
   *                  - 0  ... normal station
   */
  public static scaleToInt(value: string): number {
    switch (value) {
      case 'Ekikibo_Syuyou':
        return 10;
      default:
        return 0;
    }
  }
  /**
   * A method of converting the integer value of the station size to the string value of OuDia format.
   *
   * @todo Consider the value in the case of a normal station.
   *
   * @return {string} station size value (OuDia format string)
   */
  public parseScale(): string {
    switch (this.scale) {
      case 10:
        return 'Ekikibo_Syuyou';
      // case 0:
      default:
        return 'Ekikibo_Ippan';
    }
  }
  /**
   * A static method to convert OuDia value of train-information's display format to numeric parameter.
   *
   * @param {string} value A value of property line
   * @return {number} property number as integer
   *                  - 20 ... always show
   *                  - 10 ... displayed only when it is the starting station
   *                  - 0  ... do not show
   */
  public static trainInfoToInt(value: string): number {
    switch (value) {
      case 'DiagramRessyajouhouHyouji_Anytime':
        return 20;
      case 'DiagramRessyajouhouHyouji_Not':
        return 0;
      default:
        return 10;
    }
  }

  toJSON() {
    return {
      name: this.name,
      timeType: this.timeType,
      scale: this.scale,
      trainInfoDown: this.trainInfoDown,
      trainInfoUp: this.trainInfoUp,
      boundary: this.boundary,
      additionalOption: this.additionalOption,
      shouldShowLineNumberDown: this.shouldShowLineNumberDown,
      shouldShowLineNumberUp: this.shouldShowLineNumberUp,
      shouldShowLines: this.shouldShowLines,
      lines: this.lines,
      mainLineDown: this.mainLineDown,
      mainLineUp: this.mainLineUp,
    };
  }
}
