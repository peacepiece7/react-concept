import React, { useEffect, useState } from 'react'

import Filter from './Filter'
import InputBar from './InputBar'
import ItemList from './ItemList'

export default function ToDoList() {
  const [toDoItems, setToDoItems] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(null)

  const loadItemsInLocalStorage = () => {
    const _toDoItems = JSON.parse(localStorage.getItem('toDoList'))
    if (_toDoItems) setToDoItems(_toDoItems)
  }

  const writeItemsInLocalStorage = (items) => {
    localStorage.setItem('toDoList', JSON.stringify(items))
    setToDoItems(() => [...items])
  }

  const writeWindowColorScheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
      localStorage.setItem('theme', 'true')
    } else {
      localStorage.setItem('theme', 'false')
    }
  }

  const addItems = (text) => {
    if (!text) {
      alert('한 글자 이상 입력해주세요')
      return
    }
    const now = Date.now()
    const toDoItem = {
      id: `${text}-${now}`,
      title: text,
      completed: false,
      date: now,
    }
    toDoItems.unshift(toDoItem)
    writeItemsInLocalStorage(toDoItems)
  }

  const updateToDoItem = (uid) => {
    const newItems = toDoItems.map((item) => {
      if (item.id === uid) item.completed = !item.completed
      return item
    })
    writeItemsInLocalStorage(newItems)
  }

  const filterToDoItems = (filter) => {
    if (filter === 'All') {
      loadItemsInLocalStorage()
      return
    }
    const toDoItemsInLS = JSON.parse(localStorage.getItem('toDoList'))
    const filteredToDoItems = []
    if (filter === 'Active') {
      toDoItemsInLS.map((item) => {
        if (!item.completed) filteredToDoItems.push(item)
      })
    } else if (filter === 'Completed') {
      toDoItemsInLS.map((item) => {
        if (item.completed) filteredToDoItems.push(item)
      })
    }
    setToDoItems(filteredToDoItems)
  }
  const deleteToDoItem = (uid) => {
    const newToDoItems = toDoItems.filter((item) => item.id !== uid)
    writeItemsInLocalStorage(newToDoItems)
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  useEffect(() => {
    loadItemsInLocalStorage()
    // Set dark mode
    if (localStorage.getItem('theme') === null) {
      writeWindowColorScheme()
    }
    setIsDarkMode(() => {
      if (JSON.parse(localStorage.getItem('theme')) === false) return false
      return true
    })
  }, [])

  useEffect(() => {
    if (isDarkMode === null) return
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDarkMode)
  }, [isDarkMode, setIsDarkMode])

  return (
    <div className="flex flex-col h-[500px]">
      <Filter onFilterToDoList={filterToDoItems} onClickDarkModeBtn={toggleDarkMode} />
      <ItemList toDoItems={toDoItems} onClickCheckbox={updateToDoItem} onClickDeleteBtn={deleteToDoItem} />
      <InputBar onSubmitForm={addItems} />
    </div>
  )
}
