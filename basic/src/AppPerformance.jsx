// 성능에 문제가 될 경우 useCallback, useMeme, memo를 사용해볼 것 (차후 react팀에서 개선할 수도 있음)
import React, { memo, useCallback, useMemo, useReducer, useState } from "react"
import Mentors from "./components/Mentors"
import Mentee from "./components/Mentee"
import personReducer from "./reducer/personReducer"

function calculateSomthing() {
  for (let i = 0; i < 1000000000; i++) {
    i--
    i++
  }
  return "calculate done!"
}
const Button = memo(({ convertSomthing }) => {
  const handleClick = () => {
    convertSomthing("!")
  }
  return (
    <div style={{ margin: "20px" }}>
      <button onClick={handleClick}>click!</button>
    </div>
  )
})

const Title = memo(({ title }) => {
  // 변경되지 않는 title은 rerender되지 않음
  return <h3>{title}</h3>
})
const Name = memo(({ name }) => {
  // name은 변경되지 않기 떄문에 rerender되지 않음
  return <p>{name}</p>
})

function Profile({ profile }) {
  return (
    <article>
      <h2>Profile</h2>
      <div>
        <Title title={profile.title} />
        <Name name={profile.name} />
      </div>
    </article>
  )
}

export default function AppPerfomanceBefore() {
  const [profile1, setProfile1] = useState({ name: "cat", title: "super hector" })
  const [profile2, setProfile2] = useState({ name: "dog", title: "bark" })
  const handleConvertP1 = useCallback((val) => {
    setProfile1((prev) => ({ name: prev.name, title: prev.title + val }))
  }, [])
  const handleConvertP2 = (val) => {
    setProfile2((prev) => ({ name: prev.name, title: prev.title + val }))
  } // 함수가 변경되지 않아도 rerender가 되기때문에 button2번은 memo로 감싸도 항상 rerender됨

  const result = useMemo(() => calculateSomthing(), [profile2])

  return (
    <div>
      <p>{result}</p>
      <Profile profile={profile1} />
      <Profile profile={profile2} />
      <Button convertSomthing={handleConvertP1} />
      <Button convertSomthing={handleConvertP2} />
    </div>
  )
}

// * useMemo
// 함수의 반환값이 이전 값과 같은 경우 사용해서 실행 비용을 줄임
// 1) 함수의 결과를 화면에 출력할 때
// * useEffect
// deps가 변할 때 동작하여 상태를 관리 함
// 1) 상태관리 (useState)
// 2) DOM 조작
// * useCallback
// deps가 변하지 않는다면 함수를 재사용하여 하위 컴포넌트의 re-render를 막음(하위 컴포넌트는 memo해놔야함)
// 1) 자식 컴포넌트에 props로 함수를 전달할 경우 (props로 전달된 함수가 re-render되면 자식 컴포넌트도 re-render되기 떄문(함수의 참조가 바뀐다고 하위 컴포넌트를 전부 다시그리면 좀...))
// 2) 외부에서 값을 가져오는 api를 호출하는 경우(useEffect, useState, useCallback조합으로 useEffect의 deps에 useCallback을 useCallback의 deps에 useState를 줌)
// * memo
// 컴포넌트의 props가 변하지 않는다면 컴포넌트를 re-render하지 않음
// 1) 상위 props가 변경되지 않을 경우
