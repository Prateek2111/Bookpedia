import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/Authprovider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
