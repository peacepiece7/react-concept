import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import changeTextBgColor from '../utils/gradient'

/**
 * 이거 예시로 대충 넣어논은거고 propTypes참고하자
 * @param {object} p
 * @param {string | null} p.title
 * @param {JSX.Element} p.children
 * @returns {JSX.Element}
 */

// props.title은 propTypes테스트 용이고 실제로는 children안에서 해결할 것
export default function Layout({ children, today = null }) {
  useCallback(async () => changeTextBgColor('.gradient p', 'transitionOn', 2000), [])
  // w-full (width : 100%) 지정시 진짜.. 100%로 고정됨 max-width 설정만하면  max-width + 동적사이즈 조정임
  // w-2xl처럼 확씨라게 지정해주자

  return (
    <main className="flex justify-center h-screen bg-zinc-900">
      <div className="flex flex-col w-2xl max-w-2xl h-screen max-h-2xl mx-4">
        <h1 className="gradient">
          <div className="gradient-cover">
            <p>React To Do List</p>
          </div>
          <div className="gradient-cover">
            <p>{today}</p>
          </div>
        </h1>
        <article className="w-full h-5/6 bg-white items-center">{children}</article>
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  today: PropTypes.string,
}

Layout.defaultProps = {
  today: '',
}
