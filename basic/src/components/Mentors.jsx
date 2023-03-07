import React, { useEffect, useState } from "react"

const Mentors = ({ mentors, onDelete }) => {
  const [isConveted, setIsConverted] = useState(true)
  const lazyLoading = () => {
    for (let i = 0; i < 1000000000; i++) {
      i--
      i++
    }
    setIsConverted((prev) => !prev)
  }

  useEffect(() => {
    lazyLoading()
  }, [onDelete]) // handleDelete를 useCallback으로 감싸지 않으면 어떤 함수를 실행하던지 handleDelete가 다시 만들어지고, onDelete(handleDelete)를 dependency로 가지는 lazyLoading이 다시 실행됨

  return (
    <>
      <div>{isConveted ? "🔥🔥" : "💧💧"}</div>
      {mentors.map((mentor, index) => (
        <li key={index} onClick={onDelete}>
          {mentor.name} ({mentor.title})
        </li>
      ))}
    </>
  )
}
export default Mentors
