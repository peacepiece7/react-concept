import React from "react"

// * installation guide
// yarn add -D tailwindcss
// npx tailwindcss init
// tailwind.config.js 수정
// index.css @tailwind 추가

// * extention
// tailwind css intellisense
export default function AppTwintail() {
  return (
    <div>
      <h1 className="text-8xl">안녕</h1>
      <button className="bg-blue-500 rounded-xl px-2">button</button>
    </div>
  )
}
