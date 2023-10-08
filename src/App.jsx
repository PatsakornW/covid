import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Search from "./components/search";
import "./App.css";

function App() {
  return (
    <div>
      <div className="p-10 flex flex-wrap items-center">
        <div className="flex-grow">
          <Navbar />
        </div>
        <div className="lg:flex-none flex justify-center w-full lg:w-auto lg:mt-0 mt-4">
          <Search />
        </div>
      </div>
      <div className="p-4 lg:p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
