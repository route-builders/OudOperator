import { CommonColor } from '../../../../Domain/domains/values/common/Color';
import { InvalidABGRColorError } from '../../../../errors/InvalidABGRColorError';
import { InvalidHEXColorError } from '../../../../errors/InvalidHEXColorError';

export const colorConverter = {
  fromHEX: (v: string): CommonColor => {
    let matchResults = [
      v.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/),
      v.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/),
    ];
    if (matchResults[0]) {
      const strR = matchResults[0][1];
      const strG = matchResults[0][2];
      const strB = matchResults[0][3];
      if (strR && strG && strB) {
        const r = parseInt(`${strR}${strR}`, 16);
        const g = parseInt(`${strG}${strG}`, 16);
        const b = parseInt(`${strB}${strB}`, 16);
        return new CommonColor({ r, g, b, a: 1 });
      }
    } else if (matchResults[1]) {
      const strR = matchResults[1][1];
      const strG = matchResults[1][2];
      const strB = matchResults[1][3];
      if (strR && strG && strB) {
        const r = parseInt(strR, 16);
        const g = parseInt(strG, 16);
        const b = parseInt(strB, 16);
        return new CommonColor({ r, g, b, a: 1 });
      }
    }
    throw new InvalidHEXColorError(v);
  },
  fromABGR: (v: string): CommonColor => {
    const matchResult = v.match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
    if (matchResult) {
      const strR = matchResult[4];
      const strG = matchResult[3];
      const strB = matchResult[2];
      if (strR && strG && strB) {
        const r = parseInt(strR, 16);
        const g = parseInt(strG, 16);
        const b = parseInt(strB, 16);
        return new CommonColor({ r, g, b, a: 1 });
      }
    }

    throw new InvalidABGRColorError(v);
  },
};
