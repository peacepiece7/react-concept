# Todo List

# Functions

- darkmode [0]
- item add [0]
- item remove [0]
- item update (active, completed) [0]
- filter (all, active, completed) [0]
- local storage [0]

## 스크롤 바는 라이브러리 쓰는게 좋을 듯

- 브라우저 외부에 클릭 후 browser에 마우스를 올리면 hover되지 않음 (scroll해도 scroll bar가 나오지 않음)
- 모든 브라우저마다 호환 되는지 확인해봐야 함

추가 (2023/03/18)

- 더보기 (생성일 완료일 노트)
- sticky로 생성일 날짜별 분류

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

1. todoItems 컴포넌트에서 `todoItems.map((v) => <div>...긴 로직</div>)`를 `todoItems.map((v) => <Todo />)`로 변경하고 props drilling을 막기 위해 redux toolkit을 사용해보자
2. useContext, useHook 조합 사용해보기

```js
// darkModeContext
export const useDarkMode = () => useContext(DarkModeContext)
// App.jsx
return <Darkmode.Provider value={(isDarkMode, toggleDarkMode)}></Darkmode.Provider>
```

3. input, label 조합 사용해보기 (지금은 css로 커스텀 함)
