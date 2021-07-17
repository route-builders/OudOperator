/**
 * @class InvalidABGRColorError
 *
 * An error throwed when dewtect invaild ABGR-format color code.
 */
export class InvalidABGRColorError implements Error {
  name = InvalidABGRColorError.name;
  message: string;

  constructor(invalidColorCode: string) {
    this.message = `Invalid format. should be #AABBGGRR : (${invalidColorCode})`;
  }
}
