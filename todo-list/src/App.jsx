import React, { useEffect, useState } from 'react'
import './App.css'
import Layout from './componenets/Layout'

function App() {
  const [today, setToday] = useState('')

  useEffect(() => {
    const date = new Date()
    const day = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} ${date.toString().slice(0, 3)}`
    Array.from(document.querySelectorAll('.gradient-cover p')).map((el, i) => {
      if (i === 1) getComputedStyle(el, ':before').setProperty('content', 'React To Do List')
      else if (i === 2) getComputedStyle(el, ':before').setProperty('content', day)
    })
    setToday(() => day)
  }, [])

  return (
    <Layout today={today}>
      <div className="App" />
    </Layout>
  )
}
export default App
