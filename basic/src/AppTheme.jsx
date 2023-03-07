import React, { useContext } from "react"
import "./AppTheme.css"

import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext"

export default function AppTheme() {
  return (
    <DarkModeProvider>
      <Card name="james" title="senior deveoloper" />
      <Card name="judi" title="senior developer" />
    </DarkModeProvider>
  )
}

function Card({ name, title }) {
  const { toggleDarkMode } = useContext(DarkModeContext)
  return (
    <div>
      <h1 onClick={() => toggleDarkMode()}>Card</h1>
      <Name name={name}></Name>
      <Title title={title}></Title>
    </div>
  )
}
function Name({ name }) {
  const { darkMode } = useContext(DarkModeContext)
  return <div className={darkMode ? "dark" : "light"}>{`Name : ${name}`}</div>
}
function Title({ title }) {
  const { darkMode } = useContext(DarkModeContext)
  return <div className={darkMode ? "dark" : "light"}>{`Title : ${title}`}</div>
}
