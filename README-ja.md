# OudOperator

このライブラリは`.oud`ファイルを javascript / typescript で利用するためのライブラリです。

-   OuDia について

Windows 向け鉄道ダイヤグラム編集・表示ソフトウェアです。
take-okm 氏によって開発されています。

[OuDia](http://take-okm.a.la9.jp/oudia/)

## 使い方

### npm / yarn

1.  npm / yarn コマンドでプロジェクトへインストールします。

    -   `npm i oudoperator`
    -   `yarn add oudoperator`

2.  プロジェクト内で読みこみます。

    ```js
    import O_O from 'oudoperator'

    const dataSet = new O_O.Dataset()
    dataSet.fromOud(someLines)
    ```

### Browser

`script`タグでの読み込みに対応しています。

```html
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <title>O_O</title>
    </head>
    <body>
        <script src="/path/to/O_O.min.js"></script>
        <script>
            const dataSet = new O_O.Dataset()
            dataSet.fromOud(someLines)
        </script>
    </body>
</html>
```

## Notice

このライブラリは window オブジェクトに依存しています。そのためコマンドライン環境では稼働しません。

Copyright &copy; 2018-2019 up-tri

Released under the GNU General Public License.
