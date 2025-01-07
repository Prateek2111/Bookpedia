import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default App;
