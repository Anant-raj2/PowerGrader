import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import {
  Overview,
  Transcript,
  Booster,
} from "../screens/index";
import { Navbar, Sidebar } from "../components/index";
import { useStateContext } from "../context/ContextProvider";
import { Theme } from "../context/ContextProvider";
export const StudentDashboard = (): JSX.Element => {
  // const activeMenu = true;
  const { theme, toggleTheme, activeMenu } = useStateContext();
  useEffect(() => {
    const currentThemeMode = localStorage.getItem("theme");
    if (currentThemeMode) {
      toggleTheme(currentThemeMode as Theme);
    }
  }, []);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg overflow-hidden">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white transition-all transform translate-x-0">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg transition-all transform -translate-x-full">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "bg-main-bg dark:bg-main-dark-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg w-full dark:bg-main-dark-bg min-h-screen flex-2 justify-center items-center "
          }
        >
          <div className="fixed md:static dark:bg-main-dark-bg bg-main-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            <Routes>
              {/* Dashboard  */}
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />

              {/* Pages */}
              <Route path="/transcript" element={<Transcript />} />
              <Route path="/booster" element={<Booster />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
