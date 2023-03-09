import React from "react"
import { Route, HashRouter, Link, Routes } from "react-router-dom"
import "./App.css"

export default function AppProducts() {
  return (
    <div>
      hi
      <HashRouter>
        <Routes>
          <Route exact href="/hi" element={<div>Hello, world!</div>}></Route>
          <Route exact href="/" element={<div>FOO!</div>}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}
