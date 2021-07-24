import { CommonColor } from '../../../../../src/Domain/domains/values/common/Color';

describe('CommonColor', () => {
  describe('true case', () => {
    test('RGBで色を表現できる', () => {
      const r = 135;
      const g = 255;
      const b = 15;
      const a = 1;
      const color = new CommonColor({ r, g, b, a });
      expect(color.rgb).toBe('rgb(135, 255, 15)');
    });
    test('RGBAで色を表現できる', () => {
      const r = 135;
      const g = 255;
      const b = 15;
      const a = 1;
      const color = new CommonColor({ r, g, b, a });
      expect(color.rgba).toBe('rgba(135, 255, 15, 1)');
    });
    test('HEXで色を表現できる', () => {
      const r = 135;
      const g = 255;
      const b = 15;
      const a = 1;
      const color = new CommonColor({ r, g, b, a });
      expect(color.hex).toBe('#87ff0f');
    });
    test('BGRAで色を表現できる', () => {
      const r = 135;
      const g = 255;
      const b = 15;
      const a = 1;
      const color = new CommonColor({ r, g, b, a });
      expect(color.bgra).toBe('#0fff87ff');
    });
  });

  describe('failure case', () => {
    test('[rgb]=浮動小数点を読み込むとエラーを上げる', () => {
      const r = 135.1;
      const g = 255.1;
      const b = 15.1;
      const a = 1;
      expect(() => {
        new CommonColor({ r, g, b, a });
      }).toThrowError();
    });
    test('負数を読み込むとエラーを上げる', () => {
      const r = -135;
      const g = -255;
      const b = -15;
      const a = -1;
      expect(() => {
        new CommonColor({ r, g, b, a });
      }).toThrowError();
    });
    test('[rgb]=255より大きい数値を読み込むとエラーを上げる', () => {
      const r = 266;
      const g = 266;
      const b = 266;
      const a = 1;
      expect(() => {
        new CommonColor({ r, g, b, a });
      }).toThrowError();
    });
    test('a=1より大きい数値を読み込むとエラーを上げる', () => {
      const r = 135;
      const g = 255;
      const b = 15;
      const a = 1.01;
      expect(() => {
        new CommonColor({ r, g, b, a });
      }).toThrowError();
    });
  });
});
