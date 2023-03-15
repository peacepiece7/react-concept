import React from 'react'
import PropTypes from 'prop-types'
import { BsFillSunFill } from 'react-icons/bs'
// BsFillSunFill BeSun

export default function Filter({ onFilterToDoList, onClickDarkModeBtn }) {
  const handleFilterBtn = (e) => {
    onFilterToDoList(e.target.textContent)
  }
  const handleDarkModeBtn = () => {
    onClickDarkModeBtn()
  }
  return (
    <div
      className="flex justify-between w-full min-h-[50px] items-center
    dark:text-white text-black bg-m-gl dark:bg-m-gd rounded-t-md"
    >
      <button type="button" className="pl-[10px] cursor-pointer">
        <BsFillSunFill className="text-black dark:text-white" onClick={handleDarkModeBtn} />
      </button>
      <div className="flex">
        <div className="pr-[10px]">
          <button type="button" onClick={handleFilterBtn}>
            All
          </button>
        </div>
        <div className="pr-[10px]">
          <button type="button" onClick={handleFilterBtn}>
            Active
          </button>
        </div>
        <div className="pr-[10px]">
          <button type="button" onClick={handleFilterBtn}>
            Completed
          </button>
        </div>
      </div>
    </div>
  )
}

Filter.propTypes = {
  onFilterToDoList: PropTypes.func.isRequired,
  onClickDarkModeBtn: PropTypes.func.isRequired,
}
