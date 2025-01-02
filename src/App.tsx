import Navbar from "./components/Layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
