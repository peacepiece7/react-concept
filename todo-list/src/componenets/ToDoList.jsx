import React, { useEffect, useState } from 'react'

import Filter from './Filter'
import InputBar from './InputBar'
import ItemList from './ItemList'

export default function ToDoList() {
  const [toDoItems, setToDoItems] = useState([])

  const loadItemsInLocalStorage = () => {
    const _toDoItems = JSON.parse(localStorage.getItem('toDoList'))
    if (_toDoItems) setToDoItems(_toDoItems)
  }

  const writeItemsInLocalStorage = (items) => {
    // 로컬 스토리에 씁니다.
    localStorage.setItem('toDoList', JSON.stringify(items))
    // 상태를 변경합니다.
    setToDoItems(() => [...items])
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

  const getToDoListByFilter = (filter) => {
    if (filter === 'All') {
      loadItemsInLocalStorage()
      return
    }
    // filter작업 하기 전 localStorage에서 to do list
    const loadToDo = JSON.parse(localStorage.getItem('toDoList'))
    const newToDoList = []
    if (filter === 'Active') {
      loadToDo.map((item) => {
        if (!item.completed) newToDoList.push(item)
      })
    } else if (filter === 'Completed') {
      loadToDo.map((item) => {
        if (item.completed) newToDoList.push(item)
      })
    }
    setToDoItems(newToDoList)
  }
  const deleteToDoItem = (uid) => {
    const newToDoItems = toDoItems.filter((item) => item.id !== uid)
    writeItemsInLocalStorage(newToDoItems)
  }
  useEffect(() => {
    loadItemsInLocalStorage()
  }, [])

  return (
    <div className="flex flex-col h-full">
      <Filter onFilterToDoList={getToDoListByFilter} />
      <ItemList toDoItems={toDoItems} onClickCheckbox={updateToDoItem} onClickDeleteBtn={deleteToDoItem} />
      <InputBar onSubmitForm={addItems} />
    </div>
  )
}
