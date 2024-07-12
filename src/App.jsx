import React from "react";
import HomePage from "./Page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header className="lg:block hidden" />
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
