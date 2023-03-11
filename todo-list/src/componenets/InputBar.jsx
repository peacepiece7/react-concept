import React, { useState } from 'react'
import PropsTypes from 'prop-types'

export default function InputBar({ onSubmitForm }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (e) => {
    console.log(e.target.value)
    setInputValue(() => e.target.value)
  }

  const handleSumitForm = (e) => {
    e.preventDefault()
    onSubmitForm(inputValue)
    setInputValue(() => '')
  }

  return (
    <div className="flex w-full min-h-[50px] items-center text-white" style={{ backgroundColor: '#24203e' }}>
      <form onSubmit={handleSumitForm} className="w-full pl-10 pr-10 ml-1 mr-1">
        <input
          className="w-5/6 h-[35px] rounded-l-md pl-2 text-black"
          type="text"
          value={inputValue}
          onChange={handleInputValue}
        />
        <input
          className="w-1/6 h-[35px] rounded-r-md cursor-pointer"
          style={{ backgroundColor: '#e49a9f' }}
          type="submit"
          value="add"
        />
      </form>
    </div>
  )
}

InputBar.propTypes = {
  onSubmitForm: PropsTypes.func.isRequired,
}
