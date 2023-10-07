import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Search from "./components/search";
import "./App.css";

function App() {
  return (
    <div className=" flex-col">
      <div className="grid  p-10">
        <Navbar />
        <Search />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
