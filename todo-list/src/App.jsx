import React, { useEffect, useState } from 'react'
import './App.css'
import Layout from './componenets/Layout'
import ToDoList from './componenets/ToDoList'

function App() {
  const [today, setToday] = useState('')

  useEffect(() => {
    const date = new Date()
    const day = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} ${date.toString().slice(0, 3)}`
    Array.from(document.querySelectorAll('.gradient-cover p')).map((el, i) => {
      if (i === 0) el.setAttribute('data-before', 'React To Do List')
      else if (i === 1) el.setAttribute('data-before', day)
    })
    setToday(() => day)
  }, [])

  return (
    <Layout today={today}>
      <ToDoList />
    </Layout>
  )
}
export default App
