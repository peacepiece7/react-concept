import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import changeTextBgColor from '../utils/gradient'
import setTitleNow from '../utils/setTitleNow'

changeTextBgColor('.gradient-cover p', 'transitionOn', 2000)

/**
 * 이거 예시로 대충 넣어논은거고 propTypes참고하자
 * @param {object} p
 * @param {string | null} p.title
 * @param {JSX.Element} p.children
 * @returns {JSX.Element}
 */

// props.title은 propTypes테스트 용이고 실제로는 children안에서 해결할 것
export default function Layout({ children }) {
  const [today, setToday] = useState('')

  useEffect(() => {
    const day = setTitleNow()
    setToday(() => day)
  }, [])

  return (
    <main className="flex justify-center h-screen dark:bg-m-d bg-m-l">
      <div className="flex flex-col w-[40rem] max-w-[40rem] h-screen max-h-2xl mx-4 py-8">
        <h1 className="gradient pb-8">
          <div className="gradient-cover">
            <p>React To Do List</p>
          </div>
          <div className="gradient-cover">
            <p>{today}</p>
          </div>
        </h1>
        <article className="w-full h-full max-h-[30rem] items-center mb-8">{children}</article>
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
