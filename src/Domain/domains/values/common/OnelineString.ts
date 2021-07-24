import * as z from 'zod';

/**
 * @const 単行文字列スキーマ
 */
export const onelineStringSchema = z.string().min(1).max(200);
