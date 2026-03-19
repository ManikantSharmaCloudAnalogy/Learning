import { useState } from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { College } from "./components/College";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "pink",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
         <Route path="/login" element={<Login />} />
           <Route path="/college/*" element={<College />} />
          <Route path="/*" element={<Navigate to='/about' />} />

      </Routes>
    </div>
  );
}

export default App;
