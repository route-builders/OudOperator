import { ConverterTable, OudValue } from './types/ConverterTable';

export function converter<VMap, SpecOudValue extends OudValue>(table: ConverterTable<VMap, SpecOudValue>) {
  return {
    from: (v: string): VMap | undefined => {
      return table.find((map) => map.value === v)?.key;
    },
    to: (v: VMap): SpecOudValue | undefined => {
      return table.find((map) => map.key === v)?.value;
    },
  };
}
