import * as fs from 'fs';
import { O_O } from './src';

const data = JSON.stringify(
  new O_O()
    .fromOud(
      fs
        .readFileSync(
          '/Users/up-tri/development/route-builders/OudOperator/tests/resources/fukutoshin_tokyu_toyoko_minatomirai_130421.oud',
          'utf-8'
        )
        .split('\n')
    )
    .toJSON()
);
fs.writeFileSync('result.json', data);
