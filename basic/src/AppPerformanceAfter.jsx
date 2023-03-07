// 성능에 문제가 될 경우 useCallback, useMeme, memo를 사용해볼 것 (차후 react팀에서 개선할 수도 있음)
import React, { useReducer } from "react"
import Mentors from "./components/Mentors"
import Mentee from "./components/Mentee"
import personReducer from "./reducer/personReducer"

export default function AppPerfomanceBefore() {
  const [person, dispatch] = useReducer(personReducer, initialPerson())

  const handleChange = () => {
    const name = prompt("변경할 멘티의 이름을 알려주세요")
    const title = prompt("변경할 멘티의 타이틀을 알려주세요")
    dispatch({ type: "changed", name, title })
  }
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`)
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
    dispatch({ type: "updated", prev, current })
  }
  const handleAdd = () => {
    const name = prompt("추가할 멘토의 이름을 알려주세요")
    const title = prompt("추가할 멘토의 타이틀을 알려주세요")
    dispatch({ type: "added", name, title })
  }
  const handleDelete = () => {
    const name = prompt("삭제할 멘토의 이름을 알려주세요")
    dispatch({ type: "deleted", name })
  }

  return (
    <div>
      <h1>App Performance After</h1>
      <h2>
        <Mentee name={person.name} title={person.title}></Mentee>
      </h2>
      <p>{person.name}의 멘토는?</p>
      <ul>
        <Mentors mentors={person.mentors} onDelete={handleDelete}></Mentors>
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
      <button onClick={handleChange}>멘티 이름을 바꾸기</button>
    </div>
  )
}

const initialPerson = () => {
  return {
    name: "ellie",
    title: "junior developer",
    mentors: [
      {
        name: "bob",
        title: "front end developer",
      },
      {
        name: "james",
        title: "senior developer",
      },
    ],
  }
}
