import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Page/HomePage";
import SignUp from "./Page/SignUp";
import SignupAsA from "./Page/SignupAsA";
import Login from "./Page/LoginPage";
import RefrshHandler from "./RefrshHandler";
import Sidebar from "./Page/SideBar";
import Dashboard from "./Page/DashboardPage";
import CourseForm from "./Page/CourseForm";
import ViewAllCourses from "./Page/ViewAllCourses";
import ContactUs from "./Page/ContactUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ComingSoon from './Page/ComingSoon'
import About from "./Page/About";
import SupportPage from "./Page/SupportPage";
import TryCanvas from "./Page/TryCanvas";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const shouldRenderSidebar = () => {
    const { pathname } = location;
    return isAuthenticated && pathname.startsWith("/dashboard");
  };

  // Determine if Header and Footer should be shown based on current route
  const showHeaderAndFooter = !["/login", "/Signup", "/signupas"].includes(location.pathname);

  console.log("Current Path:", location.pathname);
  console.log("Show Header and Footer:", showHeaderAndFooter);

  return (
    <div>
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      {showHeaderAndFooter && <Header />}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupas" element={<SignupAsA />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/try-canvas" element={<TryCanvas />} />          
          <Route path="/support" element={<SupportPage />} />          
        </Routes>
      </div>

      {shouldRenderSidebar() && (
        <div className="flex">
          <Sidebar collapsed={collapsed} />
          <div className="flex-1">
            <Routes>
              <Route
                path="/dashboard"
                element={<PrivateRoute element={<Dashboard />} />}
              />
              <Route
                path="/course-form"
                element={<PrivateRoute element={<CourseForm />} />}
              />
              <Route
                path="/viewall-courses"
                element={<PrivateRoute element={<ViewAllCourses />} />}
              />
            </Routes>
          </div>
        </div>
      )}

      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;