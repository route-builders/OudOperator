# OudOperator

[For Japanese](README-ja.md)

## About

Hi> \(O_O)/

The library to use the string read from OuDia file.

**Document** (ja only)  
https://doc.route.builders/oud-operator/

- About OuDia
  The software for editing and displaying railroad diagrams.
  made by take-okm.

[OuDia](http://take-okm.a.la9.jp/oudia/)

## Usage

### npm / yarn

1.  install on your project.

    - `npm i @route-builders/oud-operator`
    - `yarn add @route-builders/oud-operator`

2.  Load module.

    ```js
    import { O_O } from '@route-builders/oud-operator';

    import * as Encoder from 'encoding-japanese';
    import { readFileSync, writeFileSync } from 'fs';

    const o_o = new O_O();
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

    writeFileSync('demo.json', JSON.stringify(o_o.fromOud(sources).toJSON()));
    ```

### Browser

hosted by [jsDelivr](https://www.jsdelivr.com/).

https://cdn.jsdelivr.net/gh/route-builders/oud-operator-dist/O_O.js

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.jsdelivr.net/gh/route-builders/oud-operator-dist/O_O.js"></script>
    <script>
      window.onload = () => {
        const o_o = new O_O();
        // ...
      };
    </script>
  </head>
  <body></body>
</html>
```

## Notice

~~This library relies on the window object. So it will not run in a command line environment.~~

## Author

Copyright &copy; 2018-2021 [up-tri](https://github.com/up-tri/)

under the MIT License.
