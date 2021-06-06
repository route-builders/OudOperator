# OudOperator

このライブラリは`.oud`ファイルを javascript / typescript で利用するためのライブラリです。

- OuDia について

Windows 向け鉄道ダイヤグラム編集・表示ソフトウェアです。
take-okm 氏によって開発されています。

[OuDia](http://take-okm.a.la9.jp/oudia/)

## 使い方

### npm / yarn

1.  npm / yarn コマンドでプロジェクトへインストールします。

    - `npm i @route-builders/oud-operator`
    - `yarn add @route-builders/oud-operator`

2.  プロジェクト内で読みこみます。

    ```js
    import { O_O } from '@route-builders/oud-operator';

    import * as Encoder from 'encoding-japanese';
    import { readFileSync, writeFileSync } from 'fs';

    const dataSet = new O_O();
    const filepath = '/path/to/file.oud';
    const buffer = readFileSync(filepath);

    const encoding = Encoder.detect(buffer, ['SJIS', 'UTF8']);
    if (!encoding) {
      throw new Error();
    }

    const sources = Encoder.convert(buffer, {
      to: 'UNICODE',
      from: encoding,
      type: 'string',
      bom: false,
    })
      .replace(/\r/g, '')
      .split('\n');

    writeFileSync('demo.json', JSON.stringify(dataSet.fromOud(sources).toJSON()));
    ```

### Browser

wip

## Notice

~~このライブラリは window オブジェクトに依存しています。そのためコマンドライン環境では稼働しません。~~

Copyright &copy; 2018-2021 up-tri

under the MIT License.
