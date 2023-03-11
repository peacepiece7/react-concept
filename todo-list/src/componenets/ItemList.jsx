import React from 'react'
import PropTypes from 'prop-types'
import { BsFillTrashFill } from 'react-icons/bs'

export default function ItemList({ toDoItems, onClickCheckbox, onClickDeleteBtn }) {
  const handleCheck = (e) => {
    onClickCheckbox(e.target.closest('div').dataset.uid)
  }
  const handleDeleteBtn = (e) => {
    onClickDeleteBtn(e.target.closest('div').dataset.uid)
  }
  return (
    <div className="list w-full h-full bg-slate-500 text-xl">
      <div className="scroll-cover scroll-bar">
        {toDoItems.map((v) => (
          <div
            className="flex justify-between check-container hover:bg-black/10 hover:transition-all transition-all"
            data-uid={v.id}
            key={v.date}
          >
            <input type="checkbox" defaultChecked={v.completed} onClick={handleCheck} />
            <span className="checkmark" />
            <p className="truncate w-4/5 text-white">{v.title}</p>
            <button type="button" className="text-white right" onClick={handleDeleteBtn}>
              <BsFillTrashFill />
            </button>
          </div>
        ))}
      </div>
    </div>
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
}
