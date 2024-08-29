import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import AdvancedFeatures from "./components/AdvancedFeatures";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import NavFooter from "./components/NavFooter";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import TemplatePage from "./components/template/Template";
import PricingPage from "./components/PricingPage";
import CodeEditorPage from "./components/editor/CodeEditor";
import About from "./components/About";
import SignUp from "./components/SignUp";
import MyProjects from "./components/MyProjects";
import PrivateRoute from "./components/PrivateRoute";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    initials: "",
  });
  const [projects, setProjects] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Check login status in localStorage when the component mounts
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  // Load projects from local storage on component mount
  useEffect(() => {
    const storedProjects = localStorage.getItem("myProjects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myProjects", JSON.stringify(projects));
  }, [projects]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Fetch data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setFormData(JSON.parse(storedUser));
    }
  }, []);

  // Update userDetails state when formData changes
  useEffect(() => {
    setUserDetails({
      ...formData,
      initials: getInitials(formData.name),
    });
  }, [formData]);

  // Handle screen width change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getInitials(fullName) {
    if (!fullName.trim()) {
      return "";
    }
    const nameArray = fullName.trim().split(" ");

    if (nameArray.length === 1) {
      // If only one word in the name
      return (
        nameArray[0][0].toUpperCase() +
        nameArray[0][nameArray[0].length - 1].toUpperCase()
      );
    } else {
      // If more than one word in the name
      const firstInitial = nameArray[0][0].toUpperCase();
      const lastInitial = nameArray[nameArray.length - 1][0].toUpperCase();
      return firstInitial + lastInitial;
    }
  }
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setIsLoggedIn(true);
    alert("Signup Successful!");
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // Toggle dark mode globally
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${darkMode
          ? "dark bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
        } flex items-center justify-center w-full`}
    >
      <div
        className="min-h-screen relative"
        style={{ width: "min(1400px, 100vw)" }}
      >
        {isMobile && (
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}
        <div className={`flex w-full`}>
          {isMobile ? (
            <div>
              <NavFooter
                darkMode={darkMode}
                isPopupOpen={isPopupOpen}
                closePopup={closePopup}
                openPopup={openPopup}
                userDetails={userDetails}
                setFormData={setFormData}
                setIsLoggedIn={setIsLoggedIn}
              />
            </div>
          ) : (
            <div
              className={`${sidebarOpen ? "w-[18%]" : "w-[5%]"
                } hidden lg:block`}
            >
              <Sidebar
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
                isPopupOpen={isPopupOpen}
                closePopup={closePopup}
                openPopup={openPopup}
                userDetails={userDetails}
                setFormData={setFormData}
                setIsLoggedIn={setIsLoggedIn}
              />
            </div>
          )}
          <div
            className={`transition-all ${darkMode
                ? "bg-gray-900 text-gray-100"
                : "bg-gray-100 text-gray-900"
              } ${isMobile ? "w-full" : sidebarOpen ? "w-[82%]" : "w-[95%]"}`}
          >
            <Routes>
              {/* Public route */}
              <Route
                path="/signup"
                element={
                  <SignUp
                    darkMode={darkMode}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route
                path="/"
                element={<Home darkMode={darkMode} />}
              />

              {/* Private routes */}
              <Route
                path="/documentation"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    element={<Documentation darkMode={darkMode} />}
                  />
                }
              />
              <Route
                path="/advanced-features"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    element={<AdvancedFeatures darkMode={darkMode} />}
                  />
                }
              />
              <Route
                path="/templates"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    element={<TemplatePage darkMode={darkMode} />}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    element={<ComingSoon darkMode={darkMode} />}
                  />
                }
              />
              <Route
                path="/pricing"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    element={<PricingPage darkMode={darkMode} />}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    element={<About darkMode={darkMode} />}
                  />
                }
              />
              <Route
                path="/codeeditor"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    element={
                      <CodeEditorPage
                        darkMode={darkMode}
                        projects={projects}
                        setProjects={setProjects}
                      />
                    }
                  />
                }
              />
              <Route
                path="/myprojects"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    element={
                      <MyProjects darkMode={darkMode} projects={projects} />
                    }
                  />
                }
              />
            </Routes>
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
