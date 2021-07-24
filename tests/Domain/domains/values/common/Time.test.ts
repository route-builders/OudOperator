import { CommonTime } from '../../../../../src/Domain/domains/values/common/Time';

describe('CommonTime', () => {
  describe('true case', () => {
    test('通常の時間を読み込める', () => {
      const h = 12;
      const m = 34;
      const s = 56;
      const time = new CommonTime({ h, m, s });
      expect(`${time}`).toBe('12:34:56');
    });
    test('文字列にする際にゼロパディングができる', () => {
      const h = 1;
      const m = 2;
      const s = 3;
      const time = new CommonTime({ h, m, s });
      expect(`${time}`).toBe('01:02:03');
    });
    test('24時超えを表現できる', () => {
      const h = 25;
      const m = 12;
      const s = 34;
      const time = new CommonTime({ h, m, s });
      expect(`${time}`).toBe('25:12:34');
    });
    test('経過分数を表現できる', () => {
      const h = 0;
      const m = 100;
      const s = 20;
      const time = new CommonTime({ h, m, s });
      expect(`${time}`).toBe('01:40:20');
    });
    test('経過秒数を表現できる', () => {
      const h = 0;
      const m = 0;
      const s = 100;
      const time = new CommonTime({ h, m, s });
      expect(`${time}`).toBe('00:01:40');
    });
    test('時間差を計算できる', () => {
      const h1 = 12;
      const m1 = 34;
      const s1 = 34;
      const time1 = new CommonTime({ h: h1, m: m1, s: s1 });
      const h2 = 16;
      const m2 = 12;
      const s2 = 56;
      const time2 = new CommonTime({ h: h2, m: m2, s: s2 });
      expect(`${time2.diff(time1)}`).toBe(`${3 * 60 * 60 + 38 * 60 + 22}`);
    });
  });

  describe('failure case', () => {
    test('浮動小数点を読み込むとエラーを上げる', () => {
      const h = 1.2;
      const m = 3.4;
      const s = 5.6;
      expect(() => {
        new CommonTime({ h, m, s });
      }).toThrowError();
    });
    test('負数を読み込むとエラーを上げる', () => {
      const h = -12;
      const m = -34;
      const s = -56;
      expect(() => {
        new CommonTime({ h, m, s });
      }).toThrowError();
    });
  });
});
