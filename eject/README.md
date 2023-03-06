# React eject

cra을 eject하여 분석한 프로젝트입니다.

# yarn start 시

1. package.json의 `scripts : { start : "react-scripts start"}`가 실행된다.

2. node_modules/react-scripts의 package.json은 아래 주소를 가르키고 있다.

```json
  "bin": {
    "react-scripts": "./bin/react-scripts.js"
  },
```

3. node_modules/react-scripts/bin/react-scipts.js를 보면 아래와 같이 실행되고 있다.

```js
/**
 * yarn start시 nodejs가 sawpn을 사용하여 프로세스를 하나 더 실행시킨다는 것을 알 수 있다.
 */

// https://nodejs.org/api/process.html#event-unhandledrejection
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
// recject되면 process.catch에서 처리가능
process.on('unhandledRejection', err => {
  throw err;
});

const spawn = require('react-dev-utils/crossSpawn');
const args = process.argv.slice(2);
const scriptIndex = args.findIndex(
  x => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex]; // scripts는 build, ejct, start, test중 하나여야합니다.
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];
if (['build', 'eject', 'start', 'test'].includes(script)) {
  const result = spawn.sync(
    process.execPath, // /usr/local/Cellar/node@18/18.14.2/bin/node nodejs 실행 경로입니다.

    // 파일을 그대로 가저옴 e.g) require.resolve => `./usr/scripts/{scripts}.js`
    // exports된 함수를 가져옴 e.g)require(`./usr/scripts/${scripts}.js`) => { exFunc1 : [Function : exFunc1], exFunc2 : [Function : exFunc2] ...}

    // yarn start NODE_ENV=production처럼 실행 할 경우 아래와 같이 배열로 바꿔서 spawn에 arguments배열로 입력됨
    // ['<PATH>/node_modules/react-scripts/scripts/start.js', 'NODE_ENV=production' ]
    nodeArgs
      .concat(require.resolve('../scripts/' + script))
      .concat(args.slice(scriptIndex + 1)),
    { stdio: 'inherit' } // 상위 프로세스의 stdio을 상속합니다.
  );
```

4. node_modules/react-sciprts/scripts/start.js

start.js가 실행되면서 yarn start서버가 열린다.
내부적으로 webpackDevServer, react-dev-util, fs등 여러 라이브러리를 사용하고 있다.

# yarn eject

## ERROR : This git repository has untracked files or uncommitted changes: ...4

```txt
This git repository has untracked files or uncommitted changes:

basic/package.json
basic/config/
basic/scripts/
eject/

Remove untracked files, stash or commit any changes, and try again.
```

- eject하기 이전 untracked files를 stage에 보내야한다.
  eject된 프로젝트는 되돌릴 수 없기 때문에 react팀에서의 배려차원에서의 경고인듯하다.

! react-scripts대신 react-scripts-cssmodules를 설치하라는 말이 있던데 위 글을 보면 알겠지만 react-scripts는 eject에러랑 상관이 없는 듯 하다.

# Eject 변경 사항

```sh
Copying files into /Users/taetae/source/repo/peacepiece7/react-concept/eject
  Adding /config/env.js to the project
  Adding /config/getHttpsConfig.js to the project
  Adding /config/modules.js to the project
  Adding /config/paths.js to the project
  Adding /config/webpack.config.js to the project
  Adding /config/webpackDevServer.config.js to the project
  Adding /config/jest/babelTransform.js to the project
  Adding /config/jest/cssTransform.js to the project
  Adding /config/jest/fileTransform.js to the project
  Adding /scripts/build.js to the project
  Adding /scripts/start.js to the project
  Adding /scripts/test.js to the project
  Adding /config/webpack/persistentCache/createEnvironmentHash.js to the project

Updating the dependencies
  Removing react-scripts from dependencies
  Adding @babel/core to dependencies
  Adding @pmmmwh/react-refresh-webpack-plugin to dependencies
  Adding @svgr/webpack to dependencies
  Adding babel-jest to dependencies
  Adding babel-loader to dependencies
  Adding babel-plugin-named-asset-import to dependencies
  Adding babel-preset-react-app to dependencies
  Adding bfj to dependencies
  Adding browserslist to dependencies
  Adding camelcase to dependencies
  Adding case-sensitive-paths-webpack-plugin to dependencies
  Adding css-loader to dependencies
  Adding css-minimizer-webpack-plugin to dependencies
  Adding dotenv to dependencies
  Adding dotenv-expand to dependencies
  Adding eslint to dependencies
  Adding eslint-config-react-app to dependencies
  Adding eslint-webpack-plugin to dependencies
  Adding file-loader to dependencies
  Adding fs-extra to dependencies
  Adding html-webpack-plugin to dependencies
  Adding identity-obj-proxy to dependencies
  Adding jest to dependencies
  Adding jest-resolve to dependencies
  Adding jest-watch-typeahead to dependencies
  Adding mini-css-extract-plugin to dependencies
  Adding postcss to dependencies
  Adding postcss-flexbugs-fixes to dependencies
  Adding postcss-loader to dependencies
  Adding postcss-normalize to dependencies
  Adding postcss-preset-env to dependencies
  Adding prompts to dependencies
  Adding react-app-polyfill to dependencies
  Adding react-dev-utils to dependencies
  Adding react-refresh to dependencies
  Adding resolve to dependencies
  Adding resolve-url-loader to dependencies
  Adding sass-loader to dependencies
  Adding semver to dependencies
  Adding source-map-loader to dependencies
  Adding style-loader to dependencies
  Adding tailwindcss to dependencies
  Adding terser-webpack-plugin to dependencies
  Adding webpack to dependencies
  Adding webpack-dev-server to dependencies
  Adding webpack-manifest-plugin to dependencies
  Adding workbox-webpack-plugin to dependencies

Updating the scripts
  Replacing "react-scripts start" with "node scripts/start.js"
  Replacing "react-scripts build" with "node scripts/build.js"
  Replacing "react-scripts test" with "node scripts/test.js"

Configuring package.json
  Adding Jest configuration
  Adding Babel preset
```

# eject시 eslint NODE_ENV설정 관련 에러

빌드 시점에 웹팩 플러그인으로 process.env.NODE_ENV에 해당하는 곳을 해당하는 문자열로 다 대체해버림

- npm start => development
- npm test => test
- npm run build => production

### 참고

- https://github.com/velopert/learning-react/issues/348
- https://itchallenger.tistory.com/entry/CREA-REACT-APP-NODEENV-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98
