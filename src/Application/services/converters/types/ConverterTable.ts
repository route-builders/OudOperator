import { OudiaFileTypeVersioning } from '../../oudiaFileTypeVersioning';

export type OudValue = string;
export type ConverterTable<T, U extends OudValue> = {
  key: T;
  value: U;
  since: OudiaFileTypeVersioning;
}[];
