import React from 'react'
import PropTypes from 'prop-types'
import { BsFillTrashFill } from 'react-icons/bs'

export default function ItemList({ toDoItems, onClickCheckbox, onClickDeleteBtn, onClickCreateDummyBtn }) {
  const handleCheck = (e) => {
    onClickCheckbox(e.target.closest('div').dataset.uid)
  }
  const handleDeleteBtn = (e) => {
    onClickDeleteBtn(e.target.closest('div').dataset.uid)
  }
  const handleCreateDummyBtn = () => {
    onClickCreateDummyBtn()
  }
  return (
    <section className="list w-full h-full text-xl ">
      <ul className="scroll-cover scroll-bar">
        {toDoItems.length === 0 && (
          <li
            className={`flex justify-between items-center check-container min-h-[80px]
          hover:bg-black/10 dark:hover:bg-white/20 hover:transition-all transition-all mb-2
          `}
            style={{ overflowX: 'visible' }}
          >
            <p className="truncate w-full ml-4 text-black dark:text-white">해야 할 일을 추가해보세요!</p>

            <button type="button" className="text-black dark:text-white" onClick={handleCreateDummyBtn}>
              더미 데이터 생성하기
            </button>
          </li>
        )}
        {toDoItems.map((v, i) => (
          <li
            className={`flex justify-between items-center check-container min-h-[80px]
          hover:bg-black/10 dark:hover:bg-white/20 hover:transition-all transition-all mb-2
          ${i % 2 ? 'bg-m-gl/10' : ''}
          `}
            data-uid={v.id}
            key={v.date}
            style={{ overflowX: 'visible' }}
          >
            <input type="checkbox" className="ml-3" defaultChecked={v.completed} onClick={handleCheck} />
            <span className="checkmark" />
            <p className={`truncate w-full ml-4 text-black dark:text-white${v.completed ? ' completed' : ''}`}>
              {v.title}
            </p>
            <button type="button" className="text-black dark:text-white mr-3" onClick={handleDeleteBtn}>
              <BsFillTrashFill />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

ItemList.propTypes = {
  toDoItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      date: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClickCheckbox: PropTypes.func.isRequired,
  onClickDeleteBtn: PropTypes.func.isRequired,
  onClickCreateDummyBtn: PropTypes.func.isRequired,
}
