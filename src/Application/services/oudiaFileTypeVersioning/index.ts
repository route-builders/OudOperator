/**
 * Oudia, OudiaSecondのファイルバージョニングを表す値オブジェクト
 */
export class OudiaFileTypeVersioning {
  constructor(public readonly major: string, public readonly minor: string) {
    Object.freeze(this);
  }

  toString(): string {
    return `v${this.major}.${this.minor}`;
  }
}
