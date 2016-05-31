# react-hmr-boilerplate
React と HMR のたたき台。

## ディレクトリ構成
  * docs
  * src
  * tasks
  * test

**docs**  
[jsdoc](https://github.com/jsdoc3/jsdoc) で生成されたファイルを置きます。  

**src**  
ソースコードや画像、フォントなどのファイルを置きます。  

**tasks**  
タスクランナー用ファイルを置きます。  
[gulp](http://gulpjs.com/)  `npm i -g gulp-cli`

**test**  
テスト用ファイルを置きます。  
[Mocha](https://github.com/mochajs/mocha)  `npm i -g mocha`  

## ためしかた
App.jsx を用意します。

**src/client/components/App.jsx**
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <main>
        Hello wolrd!
      </main>
    );
  }
}

export default App;
```

開発環境を動かす

```bash
$ npm run dev
```

ブラウザで localhost:3000 を開いてから App.jsx を編集し保存する。

```javascript
<main>
  ハロニチワ!
</main>
```
