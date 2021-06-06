/**
 * @class InvalidABGRColorError
 *
 * An error throwed when dewtect invaild ABGR-format color code.
 *
 * @since 2.0.0
 */
export class InvalidABGRColorError implements Error {
  name = InvalidABGRColorError.name;
  message: string;

  constructor(invalidColorCode: string) {
    this.message = `Invalid format. should be #AABBGGRR : (${invalidColorCode})`;
  }
}
