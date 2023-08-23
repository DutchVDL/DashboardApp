/* eslint-disable no-unused-vars */

import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <Left />
          </div>
          <div className="w-full">
            <Right />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
