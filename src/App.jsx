import React, { useState } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./Page/HomePage";
import SignUp from "./Page/SignUp";
import SignupAsA from "./Page/SignupAsA";
import Login from "./Page/LoginPage";
import RefrshHandler from './RefrshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupas" element={<PrivateRoute element={<SignupAsA />} />} />
      </Routes>
    </div>
  );
}

export default App;
