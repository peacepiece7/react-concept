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

## ERROR : This git repository has untracked files or uncommitted changes: ...

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

- react-scripts를 지우고 react-scripts-cssmoudles를 설치해야한다.
  react-scripts 내부의 설정을 외부로 옮기면서 react-scripts를 사용하지 않게되는 이슈가 있는 듯하다.
