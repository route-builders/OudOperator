# OudOperator

[For Japanese](README-ja.md)

## About

Hi> \(O_O)/

The library to use the string read from OuDia file.

-   About OuDia
    The software for editing and displaying railroad diagrams.
    made by take-okm.

[OuDia](http://take-okm.a.la9.jp/oudia/)

## Usage

### npm / yarn

1.  install on your project.

    -   `npm i @netgram/oud-operator`
    -   `yarn add @netgram/oud-operator`

2.  Load module.

    ```js
    import O_O from '@netgram/oud-operator'

    const dataSet = new O_O.Dataset()
    dataSet.fromOud(someLines)
    ```

### Browser

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

This library relies on the window object. So it will not run in a command line environment.

## Author

Copyright &copy; 2018-2019 [up-tri](https://github.com/up-tri/)

Released under the GNU General Public License.
