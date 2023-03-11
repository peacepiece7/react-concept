import React from 'react'

import Filter from './Filter'
import InputBar from './InputBar'
import ItemList from './ItemList'

export default function ToDoList() {
  return (
    <div className="flex flex-col h-full">
      <Filter />
      <ItemList />
      <InputBar />
    </div>
  )
}
