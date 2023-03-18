import React, { useEffect, useState } from 'react'

import Filter from './Filter'
import InputBar from './InputBar'
import ItemList from './ItemList'

export default function ToDoList() {
  const [type, setType] = useState('All')
  const [toDoItems, setToDoItems] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(null)

  const loadItemsInLocalStorage = () => {
    const _toDoItems = JSON.parse(localStorage.getItem('toDoList'))
    if (_toDoItems) {
      setToDoItems(_toDoItems)
      setType('All')
    }
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
    const _toDoItems = JSON.parse(localStorage.getItem('toDoList'))
    if (!_toDoItems) {
      writeItemsInLocalStorage([toDoItem])
    } else {
      _toDoItems.unshift(toDoItem)
      writeItemsInLocalStorage(_toDoItems)
    }
    setType('All')
  }

  const updateToDoItem = (uid) => {
    const newItems = toDoItems.map((item) => {
      if (item.id === uid) item.completed = !item.completed
      return item
    })
    writeItemsInLocalStorage(newItems)
  }

  const filterToDoItems = (filter) => {
    setType(filter)
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
  const createDummyItems = () => {
    const dummyItems = [
      {
        id: '아침 먹기-0679130234314',
        title: '아침 먹기',
        completed: true,
        date: '0679130234314',
      },
      {
        id: '운동하기-0679130243431',
        title: '아침 운동하기',
        completed: false,
        date: '0679130243431',
      },
      {
        id: '점심 먹기-0679130234315',
        title: '점심 먹기',
        completed: true,
        date: '0679130234315',
      },
      {
        id: '점심 운동하기-0679130234317',
        title: '점심 운동하기',
        completed: false,
        date: '0679130234317',
      },
      {
        id: '저녁 먹기-0679130234999',
        title: '저녁 먹기',
        completed: true,
        date: '0679130234999',
      },
      {
        id: '저녁 운동하기-0679130234311',
        title: '저녁 운동하기',
        completed: false,
        date: '0679130234311',
      },
      {
        id: '야식 먹기-0679130234390',
        title: '야식 먹기',
        completed: true,
        date: '0679130234390',
      },
    ]
    localStorage.setItem('toDoList', JSON.stringify(dummyItems))
    setToDoItems(dummyItems)
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
      <Filter onFilterToDoList={filterToDoItems} onClickDarkModeBtn={toggleDarkMode} type={type} />
      <ItemList
        toDoItems={toDoItems}
        onClickCheckbox={updateToDoItem}
        onClickDeleteBtn={deleteToDoItem}
        onClickCreateDummyBtn={createDummyItems}
      />
      <InputBar onSubmitForm={addItems} />
    </div>
  )
}
