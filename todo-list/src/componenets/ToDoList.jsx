import React, { useEffect, useState } from 'react'
import getDummyToDos from '../utils/getDummyToDos'
import Filter from './Filter'
import InputBar from './InputBar'
import ItemList from './ItemList'

export default function ToDoList() {
  const [filterType, setFilterType] = useState('All')
  const [toDoItems, setToDoItems] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(null)

  const getItemsInLocalStorage = () => {
    const _toDoItems = JSON.parse(localStorage.getItem('toDoList'))
    if (_toDoItems) {
      setToDoItems(_toDoItems)
      setFilterType('All')
    }
  }

  // wirteItemsInLocalStorage -> writeToDos
  const writeItemsInLocalStorage = (toDoItem) => {
    localStorage.setItem('toDoList', JSON.stringify(toDoItem, ...toDoItems))
  }

  // * 이거 utils로 따로 뺴도 될 듯
  // todo "true, false" -> 'dark, light로 변경하자'
  const writeWindowColorScheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
      localStorage.setItem('theme', 'true')
    } else {
      localStorage.setItem('theme', 'false')
    }
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
      completed: false,
      date: now,
    }
    writeItemsInLocalStorage([toDoItem, ...toDoItems])
  }

  const updateToDoItem = (uid) => {
    const newItems = toDoItems.map((item) => {
      if (item.id === uid) item.completed = !item.completed
      return item
    })
    writeItemsInLocalStorage(newItems)
  }

  const setFilter = (filter) => {
    setFilterType(filter)
    if (filter === 'All') {
      getItemsInLocalStorage()
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
  const createDummyItems = () => {
    const dummyToDos = getDummyToDos()
    const dummyItems = localStorage.setItem('toDoList', JSON.stringify(dummyToDos))
    setToDoItems(dummyItems)
  }

  useEffect(() => {
    getItemsInLocalStorage()
    // Set dark mode when first time to visit this site
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
      <Filter filterType={filterType} onFilterChange={setFilter} onClickChangeDarkMode={toggleDarkMode} />
      <ItemList
        toDoItems={toDoItems}
        onClickCheckbox={updateToDoItem}
        onClickDeleteBtn={deleteToDoItem}
        onClickCreateDummyBtn={createDummyItems}
      />
      <InputBar onSubmitForm={addToDos} />
    </div>
  )
}
