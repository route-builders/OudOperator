import { InvalidABGRColorError } from '../errors/InvalidABGRColorError';
import { InvalidHEXColorError } from '../errors/InvalidHEXColorError';

/**
 * A class for easy handling of color information
 *
 * @author up-tri
 * @since 1.0
 */
export class Color {
  /**
   * 赤色成分
   *
   * Red component of HEX color
   *
   * @type {string} It takes an integer value in the range of 0 to 255
   */
  private _r: number;
  /**
   * 緑色成分
   *
   * Green component of HEX color
   *
   * @type {string} It takes an integer value in the range of 0 to 255
   */
  private _g: number;
  /**
   * 青色成分
   *
   * Blue component of HEX color
   *
   * @type {string} It takes an integer value in the range of 0 to 255
   */
  private _b: number;
  /**
   * @constructor
   * When a character string representing a color is given, fire *setFromHEX()*.
   *
   * @param {string} v Character string representing colors such as A and B (HEX notation)
   */
  constructor(v?: string) {
    this._r = 0;
    this._g = 0;
    this._b = 0;
    if (v === undefined) {
      return;
    }
    this.setFromHEX(v);
  }
  /**
   * A method to store the color expressed in HEX format.
   *
   * @param {string} v Character string representing colors such as "#dc143c" and "#d4c" (HEX notation)
   */
  public setFromHEX(v: string) {
    let matchResults = [
      v.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/),
      v.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/),
    ];
    if (matchResults[0]) {
      const strR = matchResults[0][1];
      const strG = matchResults[0][2];
      const strB = matchResults[0][3];
      if (strR && strG && strB) {
        this._r = parseInt(`${strR}${strR}`, 16);
        this._g = parseInt(`${strG}${strG}`, 16);
        this._b = parseInt(`${strB}${strB}`, 16);
        return;
      }
    } else if (matchResults[1]) {
      const strR = matchResults[1][1];
      const strG = matchResults[1][2];
      const strB = matchResults[1][3];
      if (strR && strG && strB) {
        this._r = parseInt(strR, 16);
        this._g = parseInt(strG, 16);
        this._b = parseInt(strB, 16);
        return;
      }
    }

    throw new InvalidHEXColorError(v);
  }
  /**
   * A method to store the color expressed in ABGR format.
   *
   * @param {string} v Character string representing colors as ABGR notation
   */
  public setFromABGR(v: string): void {
    const matchResult = v.match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
    if (matchResult) {
      const strR = matchResult[4];
      const strG = matchResult[3];
      const strB = matchResult[2];
      if (strR && strG && strB) {
        this._r = parseInt(strR, 16);
        this._g = parseInt(strG, 16);
        this._b = parseInt(strB, 16);
        return;
      }
    }

    throw new InvalidABGRColorError(v);
  }
  /**
   * to get string representing a color such as "rgb(220, 20, 60)"
   *
   * @return {string} color string
   */
  public RGB(): string {
    return 'rgb(' + this._r + ', ' + this._g + ', ' + this._b + ')';
  }
  /**
   * to get string representing a color such as "#dc143c"
   *
   * @param {boolean} withSharp With or without "#"
   *
   * @return {string} A string representing color in the form of HEX
   */
  public HEX(withSharp: boolean = true): string {
    return (withSharp ? '#' : '') + this._r.toString(16) + this._g.toString(16) + this._b.toString(16);
  }
  /**
   * to get string representing a color such as "#3c14dc00"
   *
   * @param {boolean} withSharp With or without "#"
   *
   * @return {string} A string representing color in the form of BGRA
   */
  public BGR(withSharp: boolean = true): string {
    return (withSharp ? '#' : '') + this._b.toString(16) + this._g.toString(16) + this._r.toString(16) + '00';
  }

  toJSON() {
    return {
      r: this._r,
      g: this._g,
      b: this._b,
    };
  }
}
