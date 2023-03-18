import React, { useEffect, useState } from 'react'
import getDummyToDos from '../utils/getDummyToDos'
import Filter from './Filter'
import InputBar from './InputBar'
import ItemList from './ItemList'

function getIsDarkMode() {
  if (localStorage.theme) return localStorage.theme === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches === true
}
function readToDoItems() {
  const todos = JSON.parse(localStorage.getItem('toDoList'))
  return todos || []
}

export default function ToDoList() {
  const [filterType, setFilterType] = useState('all')
  const [toDoItems, setToDoItems] = useState(readToDoItems())
  const [isDarkMode, setIsDarkMode] = useState(getIsDarkMode())

  const getFilteredTodos = (todos, filter) => {
    if (filter === 'all') return todos
    return todos.filter((todo) => todo.status === filter)
  }

  const addToDos = (text) => {
    if (text.trim().length === 0) {
      alert('한 글자 이상 입력해주세요')
      return
    }
    const now = Date.now()
    const toDoItem = {
      id: `${text}-${now}`,
      title: text,
      status: 'active',
      date: `${now}`,
    }
    setToDoItems([toDoItem, ...toDoItems])
  }

  const updateToDoItem = (uid, status) => {
    const newItems = toDoItems.map((item) => {
      if (item.id === uid) {
        if (status === 'active') item.status = 'completed'
        else if (status === 'completed') item.status = 'active'
      }
      return item
    })
    setToDoItems([...newItems])
  }

  const setFilter = (filter) => {
    setFilterType(filter)
  }
  const deleteToDoItem = (uid) => {
    setToDoItems([...toDoItems.filter((item) => item.id !== uid)])
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }
  const createDummyItems = () => {
    const dummyToDos = getDummyToDos()
    setToDoItems([...dummyToDos])
  }

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoItems))
  }, [toDoItems])

  // useConText로 넘겨도 될 듯
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isDarkMode])

  const filteredToDoItems = getFilteredTodos(toDoItems, filterType)

  return (
    <div className="flex flex-col h-[500px]">
      <Filter filterType={filterType} onFilterChange={setFilter} onClickChangeDarkMode={toggleDarkMode} />
      <ItemList
        toDoItems={filteredToDoItems}
        onClickCheckbox={updateToDoItem}
        onClickDeleteBtn={deleteToDoItem}
        onClickCreateDummyBtn={createDummyItems}
      />
      <InputBar onSubmitForm={addToDos} />
    </div>
  )
}
