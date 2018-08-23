expo ツールのインストール

```
yarn global add expo-cli
```

expo プロジェクトの作成

```
expo init event-register
```

とりあえず実行

```
yarn start
```

Redux とかの導入

```
yarn add redux react-redux uuid clone moment request native-base react-navigation react-navigation-redux-helpers
```

TypeScript の導入

```
yarn add --dev typescript tslint react-native-typescript-transformer @types/redux @types/react-redux @types/uuid @types/clone @types/request  @types/react-navigation
```

react-native のビルドのオプションにTypeScriptによる処理を追加

app.json

```
{
  "expo": {
    "sdkVersion": "26.0.0",
    "packagerOpts": {
      "sourceExts": ["ts", "tsx"],
      "transformer": "node_modules/react-native-typescript-transformer/index.js"
    }
  }
}
```

Typescript と tslint の設定ファイルを作成する。

```
 ./node_modules/.bin/tsc --init --target "ES2017" --module "es2015" --jsx "react-native" --sourceMap --moduleResolution "node" --allowSyntheticDefaultImports --inlineSources
 yarn tslint --init
 ``

 ソールフォルダを作成する。

```
mkdir ./src
mkdir src/actions
mkdir src/components
mkdir src/reducers
mkdir src/states
mkdir src/utils
```

App.js を移動

```
mv App.js ./src/components/App.tsx
```

index.js を作成

```js
import { KeepAwake, registerRootComponent } from 'expo';
import App from '..//App';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);
```

package.json を変更

```json
{
    //...
    "main": "index.js",
    //...
}
```

