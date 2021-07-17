/**
 * @const valueLangEnum - ラベルの言語一覧enum
 */
export const valueLangEnum = {
  ja: 'ja',
  en: 'en',
} as const;

/**
 * @type Langs ラベルの言語を表す型
 */
export type Langs = typeof valueLangEnum[keyof typeof valueLangEnum];

/**
 * @type ラベルの定義型
 */
export type ValueLabel<T> = {
  value: T;
  labels: {
    [key in Langs]: string;
  };
};
