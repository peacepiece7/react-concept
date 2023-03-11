import React from 'react'
import PropTypes from 'prop-types'

/**
 * 이거 예시로 대충 넣어논은거고 propTypes참고하자
 * @param {object} p
 * @param {string | null} p.title
 * @param {JSX.Element} p.children
 * @returns {JSX.Element}
 */

// props.title은 propTypes테스트 용이고 실제로는 children안에서 해결할 것
export default function Layout({ children, today = null }) {
  // useCallback(() => changeTextBgColor('.gradient p', 'transitionOn', 2000), [])
  // w-full (width : 100%) 지정시 진짜.. 100%로 고정됨 max-width 설정만하면  max-width + 동적사이즈 조정임
  // w-2xl처럼 확씨라게 지정해주자

  return (
    <main className="flex justify-center h-screen ">
      <div className="flex flex-col w-[32rem] max-w-lg h-screen max-h-2xl mx-4 py-8">
        <h1 className="gradient pb-8">
          <div className="gradient-cover">
            <p>React To Do List</p>
          </div>
          <div className="gradient-cover">
            <p>{today}</p>
          </div>
        </h1>
        <article className="w-full h-full max-h-[30rem] bg-white items-center mb-8">{children}</article>
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  today: PropTypes.string.isRequired,
}
