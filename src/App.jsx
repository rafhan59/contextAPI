import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-4xl">I am from App and I&nbsp;m fixed</h1>
      <div className="flex gap-4">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/adress">Adress</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
