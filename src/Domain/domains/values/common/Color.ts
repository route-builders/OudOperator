import * as z from 'zod';

/**
 * @var commonColorSchema - 色を表すzod schema
 *
 * @see src/Domain/values/common/OnelineString.ts
 */
export const commonColorSchema = z.object({
  r: z.number().min(0).max(255).int(),
  g: z.number().min(0).max(255).int(),
  b: z.number().min(0).max(255).int(),
  a: z.number().min(0).max(1),
});

/**
 * @type commonColorValue - 色オブジェクトの native type
 */
export type CommonColorValue = z.infer<typeof commonColorSchema>;

/**
 * @class CommonColor - 色を表す値オブジェクト
 */
export class CommonColor {
  constructor(public readonly value: CommonColorValue) {
    commonColorSchema.parse(value);
    Object.freeze(this);
  }

  get rgb(): string {
    return 'rgb(' + this.value.r + ', ' + this.value.g + ', ' + this.value.b + ')';
  }

  get hex(): string {
    return '#' + this.value.r.toString(16) + this.value.g.toString(16) + this.value.b.toString(16);
  }

  get bgr(): string {
    // FIXME: Alpha
    return '#' + this.value.b.toString(16) + this.value.g.toString(16) + this.value.r.toString(16) + '00';
  }
}
