import "./App.css"
import { Route, Routes, Link } from "react-router-dom"
import Profile from "./components/Profile"
import Avator from "./components/Avator"
import TotalCount from "./components/TotalCount"
import AppXY from "./AppXY"
import AppMento from "./AppMentor"
import AppMentors from "./AppMentors"
import AppMentorsImmer from "./AppMentorsImmer"
import AppTheme from "./AppTheme"
import AppPerformance from "./AppPerformance"
import AppProducts from "./AppProducts"
import AppStyledComponent from "./AppStyledComponent"
import AppTailwind from "./AppTailwind"

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <nav>
        <Link to="/">basic</Link>
        <Link to="/mouseTracker">mouseTracker</Link>
        <Link to="mento">mento (useState)</Link>
        <Link to="mentors">mentors (useReducer)</Link>
        <Link to="mentorsImmer">mentors (immer)</Link>
        <Link to="theme">theme (useContext)</Link>
        <Link to="perfomance">mentors (performance)</Link>
        <Link to="product">product (loading)</Link>
        <Link to="styledComponent">styledcomponent</Link>
        <Link to="tailwind">tailwind</Link>
      </nav>
      <Routes>
        <Route exact path="/mouseTracker" element={<AppXY />} />
        <Route exact path="/mento" element={<AppMento />} />
        <Route exact path="/mentors" element={<AppMentors />} />
        <Route exact path="/mentorsImmer" element={<AppMentorsImmer />} />
        <Route exact path="/theme" element={<AppTheme />} />
        <Route exact path="/perfomance" element={<AppPerformance />} />
        <Route exact path="/product" element={<AppProducts />} />
        <Route exact path="/styledComponent" element={<AppStyledComponent />} />
        <Route exact path="/tailwind" element={<AppTailwind />} />
        <Route
          exact
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
        />
      </Routes>
    </div>
  )
}
export default App
