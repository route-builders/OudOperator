/**
 * @class InvalidHEXColorError
 *
 * An error throwed when dewtect invaild HEX-format color code.
 *
 * @since 2.0.0
 */
export class InvalidHEXColorError implements Error {
  name = InvalidHEXColorError.name;
  message: string;

  constructor(invalidColorCode: string) {
    this.message = `Invalid format. should be #RRGGBB or #RGB : (${invalidColorCode})`;
  }
}
