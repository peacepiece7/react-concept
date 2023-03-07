import React from "react"
import { useImmer } from "use-immer"

export default function AppMentorsImmer() {
  const [person, setPerson] = useImmer(initialPerson)
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는?</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`)
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
          setPerson((draft) => {
            const mentor = draft.mentors.find((m) => m.name === prev)
            mentor.name = current
          })
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt("추가할 멘토의 이름을 알려주세요")
          const title = prompt("추가할 멘토의 타이틀을 알려주세요")
          setPerson((draft) => {
            draft.mentors.push({ name, title })
          })
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const name = prompt("삭제할 멘토의 이름을 알려주세요")
          setPerson((draft) => {
            draft.mentors = draft.mentors.filter((mentor) => mentor.name !== name)
          })
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  )
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
}
