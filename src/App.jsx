import React from "react";
import HomePage from "./Page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Page/SignUp";
import SignupAsA from "./Page/SignupAsA";
import Login from "./Page/LoginPage";

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/SignupAs" element={<SignupAsA />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
