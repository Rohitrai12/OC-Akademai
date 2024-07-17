import React, { useState } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from "./Page/HomePage";
import SignUp from "./Page/SignUp";
import SignupAsA from "./Page/SignupAsA";
import Login from "./Page/LoginPage";
import RefrshHandler from './RefrshHandler';
import Sidebar from './Page/SideBar';
import Dashboard from './Page/DashboardPage';
import CourseForm from "./Page/CourseForm";
import ViewAllCourses from "./Page/ViewAllCourses";
import AddAssignments from "./Page/AddAssignments";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const shouldRenderSidebar = () => {
    // Determine if the sidebar should be rendered based on the current route
    const { pathname } = window.location;
    return isAuthenticated && pathname.startsWith('/dashboard');
  };

  return (
    <div>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupas" element={<SignupAsA />} />
        {/* <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> */}
      </Routes>

      {shouldRenderSidebar() && (
        <div className="flex ">
          <Sidebar collapsed={collapsed} />
          <div className="flex-1">
            <Routes>
              <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/course-form" element={<PrivateRoute element={<CourseForm />} />} />
              <Route path="/viewall-courses" element={<PrivateRoute element={<ViewAllCourses />} />} />
              <Route path="/addassignments" element={<PrivateRoute element={<AddAssignments />} />} />

            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
