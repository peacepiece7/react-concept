import React from 'react'
import PropTypes from 'prop-types'
import { BsFillSunFill } from 'react-icons/bs'
// BsFillSunFill BeSun

export default function Filter({ onFilterChange, onClickChangeDarkMode, filterType }) {
  const handleFilterBtn = (e) => {
    onFilterChange(e.target.textContent)
  }
  const handleDarkModeBtn = () => {
    onClickChangeDarkMode()
  }
  return (
    <div
      className="flex justify-between w-full min-h-[50px] items-center
    dark:text-white text-black bg-m-gl dark:bg-m-gd rounded-md mb-2"
    >
      <button type="button" className="pl-[10px] cursor-pointer">
        <BsFillSunFill className="text-black dark:text-white" onClick={handleDarkModeBtn} />
      </button>
      <div className="flex">
        <div className="pr-[10px]">
          <button
            type="button"
            className={`${filterType === 'All' ? 'underline underline-offset-4 font-bold' : ''}`}
            onClick={handleFilterBtn}
          >
            All
          </button>
        </div>
        <div className="pr-[10px]">
          <button
            type="button"
            className={`${filterType === 'Active' ? 'underline underline-offset-4 font-bold' : ''}`}
            onClick={handleFilterBtn}
          >
            Active
          </button>
        </div>
        <div className="pr-[10px]">
          <button
            type="button"
            className={`${filterType === 'Completed' ? 'underline underline-offset-4 font-bold' : ''}`}
            onClick={handleFilterBtn}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  )
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onClickChangeDarkMode: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
}
