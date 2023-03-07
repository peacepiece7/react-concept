import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"
import Avator from "./components/Avator"
import TotalCount from "./components/TotalCount"
import AppXY from "./AppXY"
import AppMento from "./AppMentor"
import AppMentors from "./AppMentors"
import AppMentorsImmer from "./AppMentorsImmer"
import AppTheme from "./AppTheme"
import AppPerformanceBefore from "./AppPerformanceBefore"
import AppPerformanceAfter from "./AppPerformanceAfter"

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">basic</a>
        <a href="/mouseTracker">mouseTracker</a>
        <a href="/mento">mento (useState)</a>
        <a href="/mentors">mentors (useReducer)</a>
        <a href="/mentorsImmer">mentors (immer)</a>
        <a href="/theme">theme (useContext)</a>
        <a href="/perfomance">mentors (performance)</a>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile title="Product Manager" name="Amanda" isNew={true}>
                  <Avator imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80" />
                </Profile>
                <Profile title="Software Enginner" name="James">
                  <Avator imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80" />
                </Profile>
                <Profile title="Cloud Enginner" name="Sara">
                  <Avator imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787" />
                </Profile>
                <Profile title="Data Analisist" name="Judi">
                  <Avator imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1940" />
                </Profile>
                <TotalCount />
              </>
            }
          ></Route>
          <Route path="/mouseTracker" element={<AppXY />} />
          <Route path="/mento" element={<AppMento />} />
          <Route path="/mentors" element={<AppMentors />} />
          <Route path="/mentorsImmer" element={<AppMentorsImmer />} />
          <Route path="/theme" element={<AppTheme />} />
          <Route
            path="/perfomance"
            element={
              <>
                <AppPerformanceBefore />
                <AppPerformanceAfter />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
