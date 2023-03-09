# Todo List

# Functions

- darkmode [x]
- item add [x]
- item remove [x]
- item update (active, completed) [x]
- filter (all, active, completed) [x]
- local storage [x]

# skillset

- windtail css
- react
- filter, darkmode ... -> vanilla js

## eslint

config 구성

`npx eslint --init`

자동 포메팅

- settings(왼쪽아래 기어) -> format on save : on 클릭

```javascript
// ctrl+p -> > setting -> user workspace setting.json 아래 추가

"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

## netlify

bulid시 eslint warning(error) ignore하기

```json
// package.json
{
  "scripts": {
    "build": "CI=false ..."
  }
}
```

## Question

웹표준검사 해보장
