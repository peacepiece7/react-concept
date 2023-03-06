import logo from "./logo.svg";
import "./App.css";

import Profile from "./components/Profile";
import Avator from "./components/Avator";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}
export default App;
