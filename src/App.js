import "./styles.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      {/* <Example /> */}
      <Navbar/>
      <Outlet/>
      {/* <RouteComponent /> */}
      {/* <Login />
      <ThemeButton /> */}
    </div>
  );
}