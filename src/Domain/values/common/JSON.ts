import * as z from 'zod';

type Literal = boolean | null | number | string;
export type JSON = Literal | { [key: string]: JSON } | JSON[];
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
export const jsonSchema: z.ZodSchema<JSON> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);
