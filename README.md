# react-concept

# [react-converpt-site](https://main--react-concepts-pp.netlify.app/)\

# [todo-list](https://main--peacepiece-todo-list.netlify.app/)

# 소개

## 1. 소개

- 개념정리
- 환경설정
- 기본 내용 정리
- 고급 내용 정리
- css라이브러리 비교
- develop
- todo project
- react router, react query
- youtube project challenge
- firebase, cloudary? shoppingmall project

## 2. 공부 방법

- 적극적 문제 해결
- 노트보단 프로젝트로 이해

# 리액트 개념

- 2013 react, facebook
- 2015 react native
- 2019 hooks, FP
- 2022 ssr+

react (library)

- SPA(single page application), CSR(client side rendering)
  react + getsby
- nextjs -> SSG/R (server side generation/rendering)

# 프레임워크 & 라이브러리

## Framework

- HTTP, Routing, State managemenet, UI 지원
- 자유도 적고, 공부량 많음
- ex) android, ios, angular, vue(경량형 framework)

## Libarary

- solution (HTTP or Routing or State management or ...)
- 자율성 높고, 공부량 작음
- ex) react

# 리액트 철학

- UI에 반응하는 events
- componenets

# 컴포넌트를 나누는 기준

```
cohesive building block for UIs loosely coupled with other componenets
다른 구성 요소와 느슨하게 결합된 UI를 위한 응집력 있는 빌딩 블록
컴포넌트는 독립적이고 고립되어 있고 재사용성이 높아야 함
```

- 느슨한 결합
- 응집력 있는 빌딩 블록
- 독립적, 고립성, 재사용성

### DRY (Dont Repeat Yourself)

- 반복되는 코드 줄이기

### SR (Single Responsibility)

- 컴포넌트 단일 책임 (너무 많은 일을 안하도록)

# 리액트 상태와 동작원리

state (내부 상태), props(외부 상태) 변경시
Virtual DOM Tree를 previous Virtual DOM Tree와 비교 후 Browser DOM Tree에서 state가 변경된 부분만 교체 re-render됨

# react hooks

- 재사용 가능한 함수 (로직, 함수의 재사용)
- use로 시작 (useState, useEffect)
- useUser (custom hook)

# 기본 툴

## npm

package manager

- 피키지 다운로드 직렬화
- 많이 개선되었지만 yarn이 더 빠르다고함
- 많은 사람들이 사용하고 있음

## npx

package excution tool

## git

version management tool

## nodejs

javascript runtime excution envinormenet

## yarn

package manager (by facebook)

- 패키지 다운로드 병렬화
- 보안이 npm이 보다 우수

## yarn berry

[yarn berry 설치 과정에서 생긴 이슈 & 해결 과정 보기](https://www.notion.so/yarn-berry-c5d443ed5b274d3d9bf70381922300ec)

- yarn berry 설치 안되는 문제 (.pnp\* 파일 생성이 안됨)
- yarn.lock은 gitignore 하면 안되는 이유
- .yarn, .pnp\* 무엇?

## eject

[eject시 일어난 일들](https://github.com/peacepiece7/react-concept/tree/main/eject)을 참고

# state management

## network state managemenet tools

- swc, react-query ...

## global state managemenet tools

- redux, mobx, immer ...
- useContext, useReducer (react 최신 지원)

#

```
git checkgout -b feature
git add .
git commit -m ""
git push origin main
```
