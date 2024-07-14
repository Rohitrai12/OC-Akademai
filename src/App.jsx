import React from "react";
import HomePage from "./Page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LoginPage from "./Page/LoginPage";
import SignUp from "./Page/SignUp";

function App() {
  return (
    <Router>
      <Header className="lg:block hidden" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
